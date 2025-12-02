import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IPost } from "../interfaces/post.interface";
import nextApiRequest from "../api/nextApiRequest";
import HTTP_METHODS from "../utils/httpsMethods";
import { NEXT_SERVER_ENDPOINTS } from "../config/routes";

const fetchPosts = async (limit = 10, abortSignal?: AbortSignal) => {
  const { data } = await nextApiRequest<IPost[]>(
    HTTP_METHODS.GET,
    NEXT_SERVER_ENDPOINTS.FETCH_POSTS,
    abortSignal,
  );
  const result = data && data.filter((x) => x.id <= limit);

  return result;
};

const usePosts = (limit: number) => {
  const queryClient = useQueryClient();

  return useQuery(["posts", limit], ({ signal }) => fetchPosts(limit, signal), {
    onSettled() {
      queryClient.removeQueries({ queryKey: ["posts"], type: "inactive" });
    },
  });
};

export { usePosts, fetchPosts };

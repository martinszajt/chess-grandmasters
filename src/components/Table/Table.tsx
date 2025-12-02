import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { usePosts } from "../../hooks/usePosts";
import { IPost } from "../../interfaces/post.interface";

const Table = () => {
  const { data: posts, isLoading } = usePosts(10);

  const [selectedPosts, setSelectedPosts] = useState<IPost[]>([]);
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable>(null);

  const header = (
    <div className="table-header">
      <h5 className="mx-0 my-1">Manage Posts</h5>
    </div>
  );

  return (
    <div className="datatable-crud-demo">
      <Toast ref={toast} />

      <div className="card">
        {posts && posts.length > 0 ? (
          <DataTable
            ref={dt}
            loading={isLoading}
            value={posts}
            selection={selectedPosts}
            onSelectionChange={(e) => setSelectedPosts(e.value)}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
            header={header}
            responsiveLayout="scroll"
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
              exportable={false}
            ></Column>
            <Column
              field="userId"
              header="User ID"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="title"
              header="Title"
              sortable
              style={{ minWidth: "16rem" }}
            ></Column>
            <Column
              field="body"
              header="Body"
              sortable
              style={{ minWidth: "16rem" }}
            ></Column>
          </DataTable>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Table;

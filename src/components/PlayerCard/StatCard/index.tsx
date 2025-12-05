"use client";

import React from "react";
import { Card } from "primereact/card";

const StatCard = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <Card className="p-0 py-0 shadow-2 bg-gray-800 border border-gray-700 rounded-lg text-white">
    <div className="text-center">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  </Card>
);

export default StatCard;

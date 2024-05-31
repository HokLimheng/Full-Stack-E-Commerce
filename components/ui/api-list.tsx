"use client";

import React from "react";
import { ApiAlert } from "@/components/ui/api-alert";
import { useParams } from "next/navigation";
import { useOrigin } from "@/hooks/use-origin";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
  entityName,
  entityIdName,
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/{${entityIdName}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/{${entityIdName}}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/{${entityIdName}}`}
      />
    </>
  );
};

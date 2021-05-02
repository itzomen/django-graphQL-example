import React from "react";

export type SchemaContextType = {
    schema: string;
    setSchema: (Schema: string) => void;
}

export const SchemaContext = React.createContext<SchemaContextType>(
    { schema: "", setSchema: schema => console.warn('No schema provider')}
);

export const useSchema = () => React.useContext(SchemaContext);

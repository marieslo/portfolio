import React, { createContext, useState, useContext, ReactNode } from "react";

type Tag = {
  id: number;
  name: string;
};

type TagsContextType = {
  tags: Tag[];
  addTag: (tag: Tag) => void;
  removeTag: (tagId: number) => void;
};

const TagsContext = createContext<TagsContextType | undefined>(undefined);

export const TagsProvider = ({ children }: { children: ReactNode }) => {
  const [tags, setTags] = useState<Tag[]>([]);

  const addTag = (tag: Tag) => {
    setTags((prevTags) => [...prevTags, tag]);
  };

  const removeTag = (tagId: number) => {
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== tagId));
  };

  return (
    <TagsContext.Provider value={{ tags, addTag, removeTag }}>
      {children}
    </TagsContext.Provider>
  );
};

export const useTags = () => {
  const context = useContext(TagsContext);
  if (!context) {
    throw new Error("useTags must be used within a TagsProvider");
  }
  return context;
};
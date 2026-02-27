import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useEditMode } from "@/components/AdminToolbar";

interface EditableTextProps {
  value: string;
  onSave: (newValue: string) => void;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
}

const EditableText = ({ value, onSave, as: Tag = "span", className = "" }: EditableTextProps) => {
  const { isAdmin } = useAuth();
  const { editMode } = useEditMode();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setText(value);
  }, [value]);

  if (!isAdmin || !editMode) {
    return <Tag className={className}>{value}</Tag>;
  }

  const handleBlur = () => {
    setEditing(false);
    if (text !== value) {
      onSave(text);
    }
  };

  return (
    <Tag
      ref={ref as any}
      className={`${className} ${editMode ? "outline-dashed outline-1 outline-primary/40 hover:outline-primary/80 rounded px-1 cursor-text transition-all" : ""}`}
      contentEditable={editMode}
      suppressContentEditableWarning
      onFocus={() => setEditing(true)}
      onBlur={(e: any) => {
        setText(e.currentTarget.textContent || "");
        handleBlur();
      }}
      onKeyDown={(e: any) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          e.currentTarget.blur();
        }
      }}
    >
      {value}
    </Tag>
  );
};

export default EditableText;

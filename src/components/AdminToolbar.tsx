import { createContext, useContext, useState, ReactNode } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Pencil, Save, LogOut, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EditModeContextType {
  editMode: boolean;
  setEditMode: (v: boolean) => void;
}

const EditModeContext = createContext<EditModeContextType>({
  editMode: false,
  setEditMode: () => {},
});

export const useEditMode = () => useContext(EditModeContext);

export const EditModeProvider = ({ children }: { children: ReactNode }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <EditModeContext.Provider value={{ editMode, setEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
};

const AdminToolbar = () => {
  const { isAdmin, signOut } = useAuth();
  const { editMode, setEditMode } = useEditMode();

  if (!isAdmin) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      >
        <div className="glass rounded-full px-4 py-2 sakura-border-glow flex items-center gap-2 shadow-2xl">
          {editMode ? (
            <>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setEditMode(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-1" /> Cancelar
              </Button>
              <span className="text-xs text-primary font-medium animate-pulse">
                Modo edição ativo
              </span>
            </>
          ) : (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setEditMode(true)}
              className="text-muted-foreground hover:text-primary"
            >
              <Pencil className="h-4 w-4 mr-1" /> Editar
            </Button>
          )}
          <div className="w-px h-5 bg-border" />
          <Button
            size="sm"
            variant="ghost"
            onClick={signOut}
            className="text-muted-foreground hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AdminToolbar;

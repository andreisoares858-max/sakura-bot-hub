import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const AdminToolbar = () => {
  const { isAdmin, signOut } = useAuth();

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
          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
            <Link to="/admin">
              <Settings className="h-4 w-4 mr-1" /> Painel Admin
            </Link>
          </Button>
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

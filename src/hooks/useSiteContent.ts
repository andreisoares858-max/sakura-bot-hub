import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useSiteContent = (page: string, sectionKey: string) => {
  return useQuery({
    queryKey: ["site-content", page, sectionKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("content")
        .eq("page", page)
        .eq("section_key", sectionKey)
        .maybeSingle();

      if (error) throw error;
      return data?.content ?? null;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useUpdateSiteContent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      page,
      sectionKey,
      content,
    }: {
      page: string;
      sectionKey: string;
      content: any;
    }) => {
      const { error } = await supabase
        .from("site_content")
        .upsert(
          [{ page, section_key: sectionKey, content }],
          { onConflict: "page,section_key" }
        );
      if (error) throw error;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["site-content", variables.page, variables.sectionKey],
      });
    },
  });
};

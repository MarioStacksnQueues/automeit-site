import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { type InsertContact, type InsertChecklist } from "@shared/schema";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit contact form");
      }
      
      return await res.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message || "We'll be in touch shortly.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

export function useRequestChecklist() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertChecklist) => {
      // Using Formspree instead of internal API
      const res = await fetch("https://formspree.io/f/mkogqkzr", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (!res.ok) {
        throw new Error("Failed to request checklist");
      }

      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Checklist on the way!",
        description: "Check your email inbox soon.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

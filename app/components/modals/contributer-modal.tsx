"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContributerModal } from "@/hooks/use-contributer-modal";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { 
  Form,
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  githubUsername: z.string().min(1, "GitHub username is required"),
});

export const ContributerModal = () => {
  const contributerModal = useContributerModal();
  const [loading, setLoading] = useState(false);
  const [showGithubInput, setShowGithubInput] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      githubUsername: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await axios.post('/api/contributors', values);
      toast.success("Contributor added successfully!");

      form.reset(); // Reset form after successful submission
      contributerModal.onClose(); // Close modal after submission
      window.location.reload(); // Reload to refresh data in UserCard
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Add a contributor"
      description="Add those who have contributed to the development of this website"
      isOpen={contributerModal.isOpen}
      onClose={contributerModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input 
                        disabled={loading} 
                        placeholder="Enter contributor's name" 
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>  
                )}
              />

              {showGithubInput && (
                <FormField
                  control={form.control}
                  name="githubUsername"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GitHub Username</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Enter GitHub username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading} 
                  variant="outline"
                  onClick={contributerModal.onClose}
                >
                  Cancel
                </Button>
                
                {!showGithubInput ? (
                  <Button
                    disabled={loading}
                    type="button"
                    onClick={() => setShowGithubInput(true)}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button disabled={loading} type="submit">
                    Submit
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

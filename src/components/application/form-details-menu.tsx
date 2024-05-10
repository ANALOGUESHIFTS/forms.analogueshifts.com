"use client";
import { Share, Eye, EllipsisVertical, Trash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deletePost } from "@/helper-functions/delete-post";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

export default function FormDetailsDropdown({ user, form, setLoading }: any) {
  const { toast } = useToast();
  const router = useRouter();

  // Delete A Vet by using the Form UUID
  const deleteForm = async () => {
    setLoading(true);
    deletePost(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tools/form/delete/${form.uuid}`,
      user.token,
      () => {
        toast({
          variant: "default",
          title: "Form deleted successfully",
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
        router.push("/forms");
      },
      (error: any) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Error deleting form.",
          description: error.message,
        });
        setLoading(false);
        console.log(error);
      }
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-11 h-11 rounded-full flex items-center justify-center bg-transparent hover:bg-primary-boulder300/30 duration-150 cursor-pointer">
          <EllipsisVertical width={20} height={20} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-primary-boulder950">
          Actions
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-primary-boulder700 ">
            <Eye className="mr-2 h-4 w-4" />
            <span>Preview</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-primary-boulder700 "
            onClick={async () => {
              if (navigator.share) {
                try {
                  await navigator.share({
                    title: form.title,
                    text: "Analogueshifts Forms",
                    url:
                      "https://forms.analogueshifts.com/forms/show/" +
                      form.uuid,
                  });
                } catch (error) {
                  toast({
                    variant: "destructive",
                    title: "Error sharing content",
                    description: "There was a problem with your request.",
                  });
                }
              } else {
                toast({
                  variant: "destructive",
                  title: "Sharing not supported on this device.",
                  description: "There was a problem with your request.",
                });
              }
            }}
          >
            <Share className="mr-2 h-4 w-4" />
            <span>Share</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={deleteForm}
            className="text-primary-boulder700 "
          >
            <Trash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
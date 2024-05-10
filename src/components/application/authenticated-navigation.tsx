"use client";
import ApplicationLogo from "./application-logo";
import Link from "next/link";
import ProfileDropdown from "./profile-dropdown";
import AppsDropdown from "./apps-dropdown";
import { useState } from "react";
import Cookies from "js-cookie";
import { useToast } from "../ui/use-toast";
import LoadingSpinner from "./loading-spinner";
import IdiomProof from "./idiom-proof";

function AuthenticatedNavigation({ user }: any) {
  const [logoutModal, setLogoutModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogout = async () => {
    const axios = require("axios");
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/logout";
    let config = {
      url: url,
      method: "POST",
      headers: {
        Authorization: "Bearer " + user?.token,
      },
    };
    setLoading(true);

    try {
      await axios.request(config);
      Cookies.remove("analogueshifts");
      window.location.href = "/login";
    } catch (error) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Error logging out",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <div className="flex justify-center pt-3 pb-20 px-3">
      <IdiomProof
        open={logoutModal}
        description="   Are you sure you want to sign out of your account? You can always
        sign in at anytime."
        title="Log Out"
        action={() => {
          setLogoutModal(false);
          handleLogout();
        }}
        close={() => setLogoutModal(false)}
      />
      {loading && <LoadingSpinner />}
      <nav className="bg-white  backdrop-blur-lg w-full lg:rounded-full fixed z-30">
        <div className="w-full mx-auto px-4 lg:px-6 xl:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <ApplicationLogo />
                </Link>
              </div>
            </div>

            {/* Settings Dropdown */}
            <div className="flex items-center  gap-2">
              {user && (
                <ProfileDropdown
                  user={user}
                  logout={() => setLogoutModal(true)}
                />
              )}
              <AppsDropdown />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AuthenticatedNavigation;
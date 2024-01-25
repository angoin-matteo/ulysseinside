"use client";

import type { ExtendedProfile } from "@/types";

import { useEffect, useState } from "react";

export default function useProfile(username: string): ExtendedProfile | undefined {
  const [profile, setProfile] = useState<ExtendedProfile>();

  useEffect(() => {
    fetch(`/api/blog/profiles/${username}`)
      .then(response => response.json())
      .then(data => setProfile(data.profile));
  });

  return profile;
}

"use client";

import { useState, useEffect } from "react";
import Menu from './menu';
import UserProfile from '../user-profile';

interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

export default function AuthSection() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/auth/session");
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Listen for storage events to update when user logs out
  useEffect(() => {
    const handleStorageChange = () => {
      fetchUser();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  // Nếu đã đăng nhập, chỉ hiển thị UserProfile
  if (user) {
    return <UserProfile />;
  }

  // Nếu chưa đăng nhập, hiển thị Menu
  return <Menu />;
}

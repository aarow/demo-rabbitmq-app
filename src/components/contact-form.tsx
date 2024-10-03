"use client";

import { useState } from "react";
import sendMessage from "@/app/actions/sendMessage";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Data } from "@/app/types";
import { LoadingButton } from "./loading-button";

interface ContactFormProps {
  setData: React.Dispatch<React.SetStateAction<Data>>;
}

export function ContactForm({ setData }: ContactFormProps) {
  const [isLoading, setLoading] = useState(false);
  async function action(formData: FormData) {
    setLoading(true);
    await sendMessage(formData);
    setData((prev: Data) => [...prev, Object.fromEntries(formData.entries())]);
    setLoading(false);
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <form action={action}>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            Send us a message and we'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              required
            />
          </div>
          <Input
            type="hidden"
            name="timestamp"
            id="timestamp"
            value={new Date().toISOString()}
          />
        </CardContent>
        <CardFooter>
          <LoadingButton
            isLoading={isLoading}
            disabled={isLoading}
            type="submit"
            className="w-full"
          >
            Send Message
          </LoadingButton>
        </CardFooter>
      </form>
    </Card>
  );
}

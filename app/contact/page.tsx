"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // For now, just log and show success
    console.log("Form submitted:", formData);
    setStatus("success");

    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("idle");
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            I want to help you realize your project vision. Let&apos;s discuss how to make it happen!
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
            <CardDescription>
              Fill out the form below and I will get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border rounded-md bg-background resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" className="w-full">
                {status === "success" ? "Message Sent! ✓" : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400 text-center">
                  Thank you! Your message has been received.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { getInquiryModalCopy } from "./inquiry-modal-copy";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packagePrice: string;
  priceLabel?: string;
  description?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  accentColor: string;
}

export default function InquiryModal({
  isOpen,
  onClose,
  packageName,
  packagePrice,
  priceLabel,
  description,
  messageLabel,
  messagePlaceholder,
  accentColor,
}: InquiryModalProps) {
  const modalCopy = getInquiryModalCopy({
    description,
    messageLabel,
    messagePlaceholder,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const submitInquiry = trpc.inquiries.submit.useMutation({
    onSuccess: () => {
      toast.success("Inquiry submitted successfully! We'll be in touch soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      onClose();
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to submit inquiry. Please try again.");
    },
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    submitInquiry.mutate({
      packageName,
      packagePrice,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black/80 border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-white">
            Interested in {packageName}?
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {modalCopy.description}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Package Info */}
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              Selected Package
            </p>
            <p className="text-white font-semibold">{packageName}</p>
            <p className={`text-sm font-bold ${accentColor}`}>
              {priceLabel ?? `${packagePrice}/month`}
            </p>
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white text-sm">
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              disabled={submitInquiry.isPending}
            />
            {errors.name && (
              <p className="text-red-400 text-xs">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white text-sm">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              disabled={submitInquiry.isPending}
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white text-sm">
              Phone Number (Optional)
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              disabled={submitInquiry.isPending}
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white text-sm">
              {modalCopy.messageLabel}
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={modalCopy.messagePlaceholder}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-24 resize-none"
              disabled={submitInquiry.isPending}
            />
            {errors.message && (
              <p className="text-red-400 text-xs">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={submitInquiry.isPending}
              className="flex-1 border-white/10 text-white hover:bg-white/5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitInquiry.isPending}
              className={`flex-1 font-bold text-black ${accentColor === "text-lime-500" ? "bg-lime-500 hover:bg-lime-600" : accentColor === "text-cyan-500" ? "bg-cyan-500 hover:bg-cyan-600" : accentColor === "text-lime-400" ? "bg-lime-400 hover:bg-lime-500" : "bg-purple-500 hover:bg-purple-600"}`}
            >
              {submitInquiry.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Inquiry"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

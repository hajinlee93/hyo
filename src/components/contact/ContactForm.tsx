"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { ContactModalData } from "./ContactModal";
import dynamic from "next/dynamic";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const ContactModal = dynamic(() => import("./ContactModal"));

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [contactModal, setContactModal] = useState<ContactModalData | null>(
    null
  );

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

}

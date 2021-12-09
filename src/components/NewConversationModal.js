import React from "react";
import { Modal } from "react-bootstrap";

export default function NewConversationModal({ closeModal }) {
  return (
    <>
      <Modal.Header closeButton={closeModal}>Create Contact</Modal.Header>
      <Modal.Body></Modal.Body>
    </>
  );
}

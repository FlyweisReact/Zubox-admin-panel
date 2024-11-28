/** @format */

import { AnimatePresence, motion } from "motion/react";
import { Modal } from "react-bootstrap";

export const DeleteConfirmation = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, zIndex: -100 }}
          animate={{ opacity: 1, zIndex: 200 }}
          exit={{ opacity: 0, zIndex: -100 }}
          transition={{ duration: 0.3 }}
          className={"delete_confirmation_container"}
        >
          <div className={"delete_confirmation"}>
            <div className={"content"}>
              <div className={"blank"}></div>
              <h5 className={"headline"}>Are you sure?</h5>
            </div>

            <div className={"btn_container"}>
              <button className={"submit"} onClick={() => setOpen(false)}>
                YES
              </button>
              <button className={"reset"} onClick={() => setOpen(false)}>
                NO
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const DefaultDialog = ({ show, handleClose, children }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {children}
    </Modal>
  );
};

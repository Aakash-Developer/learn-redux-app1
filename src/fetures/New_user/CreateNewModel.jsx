import { useRef } from "react";
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, FormLabel, Input, FormControl, ModalCloseButton, ModalFooter } from "@chakra-ui/react";

export function CreateNewModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Create new</Button>

      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(5px) " />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Position</FormLabel>
              <Input ref={initialRef} placeholder="Web Developer" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="Name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Ex: jhone@gmail.com" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contact No.</FormLabel>
              <Input placeholder="Contact number" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

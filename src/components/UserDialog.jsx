import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from './ui/dialog';

function UserDialog({ user, onClose }) {
    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent>
                <DialogTitle>{user.firstName} {user.lastName}</DialogTitle>
                <DialogDescription>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phoneNumber}</p>
                </DialogDescription>
                <DialogClose asChild>
                    <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Close
                    </button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}

export default UserDialog;

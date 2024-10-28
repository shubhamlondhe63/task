import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import UserDialog from './UserDialog';

function UserCard({ user }) {
    const [isDialogOpen, setDialogOpen] = useState(false);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{user.firstName} {user.lastName}</CardTitle>
            </CardHeader>
            <CardContent>
                <p><strong>Address:</strong> {user.address}</p>
                <p><strong>Phone:</strong> {user.phoneNumber}</p>
            </CardContent>
            <CardFooter>
                <button 
                    onClick={() => setDialogOpen(true)} 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Fetch Details
                </button>
            </CardFooter>
            {isDialogOpen && <UserDialog user={user} onClose={() => setDialogOpen(false)} />}
        </Card>
    );
}

export default UserCard;

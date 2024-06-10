'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function LoginAndRegisterModal() {
    return (
        <Dialog>
            <DialogTrigger><Button>Postear</Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <Tabs defaultValue="login" className="mx-auto p-0">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="regiser">Regiser</TabsTrigger>
                            </TabsList>
                            <TabsContent value="login">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Login</CardTitle>
                                        <CardDescription>
                                            Logeate para poder acceder a las funciones de Solo Factos
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="username">Username</Label>
                                            <Input id="username" placeholder="@frannlencina" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="password">Contraseña</Label>
                                            <Input type="password" id="password" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Login</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="regiser">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Register</CardTitle>
                                        <CardDescription>
                                            Registrate para acceder a las funciones de Solo Factos
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="current">Email</Label>
                                            <Input id="current" type="email" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="current">Username</Label>
                                            <Input id="current" type="username" placeholder="@frannlencina" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="new">Contraseña</Label>
                                            <Input id="new" type="regiser" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Regiser</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
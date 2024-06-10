'use client'
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import LoginAndRegisterModal from "../LoginAndRegisterModal"

export default function FirstNotLogged() {

    return (
        <div className="flex flex-col justify-center items-start gap-4 mt-32 min-h-[450px]">
            <div>
                <h1 className="text-3xl text-center font-black mr-5">Soltá tu primer facto</h1>
                <p className="text-sm opacity-70 max-w-sm text-start">No le tengas miedo al exito y soltá esas verdades</p>
            </div>
            <Separator />
            <div className="flex flex-col items-start max-w-sm  gap-4 space-x-2 mt-3">
                <Textarea placeholder="Abrí esa panaderia" className="resize-none min-w-[400px]"
                />
                <div>
                    <LoginAndRegisterModal />
                </div>
            </div>
            <hr />
        </div>
    )
}
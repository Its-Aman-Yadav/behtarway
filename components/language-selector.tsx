"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function LanguageSelector() {
  const [language, setLanguage] = useState("English")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("English")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("हिंदी")}>हिंदी</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("தமிழ்")}>தமிழ்</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ગુજરાતી")}>ગુજરાતી</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

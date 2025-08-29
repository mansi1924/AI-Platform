"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { RotateCcw, Save, Code, Share, MoreHorizontal, Grid3X3, Download, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PlaygroundPage() {
  const [prompt, setPrompt] = useState("Write a tagline for an ice cream shop")
  const [model, setModel] = useState("text-babbage-001")
  const [temperature, setTemperature] = useState([0.56])
  const [maxLength, setMaxLength] = useState([2060])
  const [topP, setTopP] = useState([0.9])
  const [isGenerating, setIsGenerating] = useState(false)
  const [output, setOutput] = useState("")

  const handleSubmit = async () => {
    setIsGenerating(true)
    setTimeout(() => {
      setOutput("🍦 Sweet Dreams Come True - Where Every Scoop is a Smile! 🍦")
      setIsGenerating(false)
    }, 2000)
  }

  const handleReset = () => {
    setPrompt("")
    setOutput("")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-foreground">Playground</h1>
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <ThemeToggle />
            <Select defaultValue="preset">
              <SelectTrigger className="w-54">
                <SelectValue placeholder="Load a preset..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="preset">Load a preset...</SelectItem>
                <SelectItem value="creative">Creative Writing</SelectItem>
                <SelectItem value="business">Business Copy</SelectItem>
                <SelectItem value="technical">Technical Writing</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Main Content */}
        <div className="flex-1 flex flex-col p-6">
          <div className="flex-1 mb-4">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              className="w-full h-full resize-none text-base"
            />
          </div>

          {/* Output Area */}
          {output && (
            <Card className="p-4 mb-4 bg-muted/50">
              <p className="text-sm text-muted-foreground mb-2">Generated Output:</p>
              <p className="text-foreground">{output}</p>
            </Card>
          )}

          <div className="flex items-center gap-3">
            <Button
              onClick={handleSubmit}
              disabled={isGenerating || !prompt.trim()}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              {isGenerating ? "Generating..." : "Submit"}
            </Button>
            <Button variant="outline" size="icon" onClick={handleReset}>
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 border-l border-border p-6 bg-muted/20">
          <div className="space-y-6">
            {/* Mode */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Mode</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="p-2 bg-transparent">
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2 bg-transparent">
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2 bg-transparent">
                  <Zap className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Model */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Model</h3>
              <Select value={model} onValueChange={setModel}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-babbage-001">text-babbage-001</SelectItem>
                  <SelectItem value="text-curie-001">text-curie-001</SelectItem>
                  <SelectItem value="text-davinci-003">text-davinci-003</SelectItem>
                  <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Temperature */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-foreground">Temperature</h3>
                <span className="text-sm text-muted-foreground">{temperature[0]}</span>
              </div>
              <Slider
                value={temperature}
                onValueChange={setTemperature}
                max={1}
                min={0}
                step={0.01}
                className="[&_[role=slider]]:bg-purple-600 [&_[role=slider]]:border-purple-600 [&_.bg-primary]:bg-purple-600"
              />
            </div>

            {/* Maximum Length */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-foreground">Maximum Length</h3>
                <span className="text-sm text-muted-foreground">{maxLength[0]}</span>
              </div>
              <Slider
                value={maxLength}
                onValueChange={setMaxLength}
                max={4000}
                min={1}
                step={1}
                className="[&_[role=slider]]:bg-purple-600 [&_[role=slider]]:border-purple-600 [&_.bg-primary]:bg-purple-600"
              />
            </div>

            {/* Top P */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-foreground">Top P</h3>
                <span className="text-sm text-muted-foreground">{topP[0]}</span>
              </div>
              <Slider
                value={topP}
                onValueChange={setTopP}
                max={1}
                min={0}
                step={0.01}
                className="[&_[role=slider]]:bg-purple-600 [&_[role=slider]]:border-purple-600 [&_.bg-primary]:bg-purple-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

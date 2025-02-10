"use client"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Star, Camera, Award, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function Page() {
  const logos = [
    {
      src: "/networks/disney.png",
      alt: "Disney",
    },
    {
      src: "/networks/cbs.png",
      alt: "CBS",
    },
    {
      src: "/networks/hbo.png",
      alt: "HBO",
    },
    {
      src: "/networks/lifetime.png",
      alt: "Lifetime",
    },
    {
      src: "/networks/nick.png",
      alt: "Nickelodeon",
    },
    {
      src: "/networks/hulu.png",
      alt: "Hulu",
    },
    {
      src: "/networks/abc.png",
      alt: "ABC",
    },
    {
      src: "/networks/netflix.png",
      alt: "Netflix",
    },
    {
      src: "/networks/fox.png",
      alt: "Fox",
    },
    {
      src: "/networks/nbc.png",
      alt: "NBC",
    },
  ]

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const email = formData.get("email") as string
    const name = formData.get("name") as string
    const message = formData.get("message") as string

    // Create email content
    const subject = `New Star Application from ${name}`
    const mailtoUrl = `mailto:info@worldpremiereartists.com,chase@worldpremiereartists.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`

    window.location.href = mailtoUrl
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-3xl">
                  Become a Star
                </h1>
                <p className="max-w-[800px] text-gray-500 md:text-xl mx-auto">
                  Join our roster of talented artists who have appeared in major productions across television, film,
                  and digital media. Professional training and industry connections for ages 4+ through young adults.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-white hover:bg-red-700"
                >
                  Start Your Journey
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-12">Our Talent Has Appeared On</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center justify-center p-4 transition-transform hover:scale-105"
                  >
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={120}
                      height={45}
                      className="h-8 sm:h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Star className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">Industry Access</h3>
                <p className="text-sm text-gray-500">Direct connections to top celebrity agents and managers</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Camera className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">Professional Training</h3>
                <p className="text-sm text-gray-500">Expert coaching in acting, modeling, and performance</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Award className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">Success Track</h3>
                <p className="text-sm text-gray-500">Proven pathway to entertainment industry success</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <TrendingUp className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">Career Growth</h3>
                <p className="text-sm text-gray-500">Continuous development and industry opportunities</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Start Your Entertainment Career</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Fill out the form below to begin your journey in the entertainment industry
                </p>
              </div>
              <div className="w-full max-w-sm space-y-3">
                <form 
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <Input name="name" placeholder="Your Name" required type="text" />
                  <Input name="email" placeholder="Your Email" required type="email" />
                  <Textarea
                    name="message"
                    placeholder="Tell us about yourself and your interests (acting, modeling, singing)"
                    required
                  />
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Submit Application
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  By submitting, you agree to be contacted about opportunities in the entertainment industry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
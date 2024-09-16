import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Users, Calendar, Star, VideoIcon } from "lucide-react";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      <div className="flex flex-col min-h-screen bg-gray-100 font-poppins  ">
        <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
          <div className="container mx-auto flex justify-between items-center  font-poppins text-lg">
            <Link className="flex items-center  flex-1  " href="#">
              <VideoIcon className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">
                GuidanceConnect
              </span>
            </Link>

            <nav className="hidden lg:flex justify-center   space-x-4 ">
              <Link href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link
                href="#bootcamps"
                className="text-gray-600 hover:text-gray-900"
              >
                Bootcamps
              </Link>
              <Link
                href="#benefits"
                className="text-gray-600 hover:text-gray-900"
              >
                Benefits
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
            <div className="space-x-4 flex-1 text-right">
              <Button>Login</Button>
              <Button>Register</Button>
            </div>
          </div>
        </header>

        <main className="flex-1 ">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center">
            <div className="container  px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Connect with Experienced Mentors
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                    GuidanceConnect helps students and guidance seekers connect
                    with domain experts and seniors through personalized video
                    calls.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input
                      className="max-w-lg flex-1"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Button type="submit">Get Started</Button>
                  </form>
                  <p className="text-xs text-gray-500">
                    Start your journey towards success today. No credit card
                    required.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-white"
            id="features"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Why Choose GuidanceConnect?
              </h2>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <Video className="h-12 w-12 text-blue-600" />
                    <h3 className="text-xl font-bold">Video Consultations</h3>
                    <p className="text-gray-600 text-center">
                      Connect face-to-face with mentors from around the world.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <Users className="h-12 w-12 text-blue-600" />
                    <h3 className="text-xl font-bold">Expert Mentors</h3>
                    <p className="text-gray-600 text-center">
                      Access a diverse pool of experienced professionals and
                      seniors.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <Calendar className="h-12 w-12 text-blue-600" />
                    <h3 className="text-xl font-bold">Flexible Scheduling</h3>
                    <p className="text-gray-600 text-center">
                      Book sessions at times that suit your schedule.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
            id="how-it-works"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                How It Works
              </h2>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-lg p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Sign Up</h3>
                  <p className="text-gray-600 text-center">
                    Create your account and tell us about your goals.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-lg p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Match with Mentors</h3>
                  <p className="text-gray-600 text-center">
                    We'll connect you with the best mentors for your needs.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-2 border-gray-200 rounded-lg p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Start Learning</h3>
                  <p className="text-gray-600 text-center">
                    Schedule video calls and get personalized guidance.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-white"
            id="testimonials"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                What Our Users Say
              </h2>
              <div className="grid gap-8 lg:grid-cols-2">
                <Card>
                  <CardContent className="flex flex-col space-y-2 p-6">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <p className="text-gray-600">
                      "GuidanceConnect helped me find the perfect mentor for my
                      career transition. The video calls were incredibly
                      insightful!"
                    </p>
                    <p className="font-semibold">- Sarah T., Career Changer</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col space-y-2 p-6">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <p className="text-gray-600">
                      "As a senior professional, I love being able to give back
                      and guide the next generation through GuidanceConnect."
                    </p>
                    <p className="font-semibold">- Mark R., Mentor</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Ready to Connect?
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                    Join GuidanceConnect today and take the first step towards
                    your goals.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input
                      className="max-w-lg flex-1 bg-white"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Button
                      type="submit"
                      className="bg-white text-blue-600 hover:bg-gray-100"
                    >
                      Get Started
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">
            © 2023 GuidanceConnect. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
      //{" "}
    </div>
  );
}

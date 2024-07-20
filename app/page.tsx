
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CropIcon className="h-8 w-8" />
          <span className="text-xl font-bold">SokoPlus</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Farmers
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="md:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center py-24 md:py-32 lg:py-40 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Connecting Farmers to Buyers</h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              Discover the freshest produce and support local farmers on our marketplace.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Join as a Farmer
            </Link>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Farmers</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the best local produce from our trusted farmers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <img
                    src="https://img.freepik.com/free-photo/grunge-concrete-material-background-texture-wall-concept_53876-33580.jpg?size=626&ext=jpg"
                    width={300}
                    height={200}
                    alt="Farmer 1"
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Ayubu Samwel</h3>
                        <p className="text-sm text-muted-foreground">Organic Farmer</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Verified</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Offering a wide variety of fresh, organic produce from our family farm.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link href="#" className="text-primary hover:underline" prefetch={false}>
                      View Products
                    </Link>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="https://img.freepik.com/free-photo/grunge-concrete-material-background-texture-wall-concept_53876-33580.jpg?size=626&ext=jpg"
                    width={300}
                    height={200}
                    alt="Farmer 2"
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Juma Joseph</h3>
                        <p className="text-sm text-muted-foreground">Dairy Farmer</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Verified</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Providing high-quality dairy products from our family-owned farm.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link href="#" className="text-primary hover:underline" prefetch={false}>
                      View Products
                    </Link>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="https://img.freepik.com/free-photo/grunge-concrete-material-background-texture-wall-concept_53876-33580.jpg?size=626&ext=jpg"
                    width={300}
                    height={200}
                    alt="Farmer 3"
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Asante Samwel</h3>
                        <p className="text-sm text-muted-foreground">Vegetable Farmer</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Verified</Badge>
                  </div>
                  <p className="text-muted-foreground">Growing a wide variety of fresh, sustainable vegetables.</p>
                  <div className="flex items-center justify-between">
                    <Link href="#" className="text-primary hover:underline" prefetch={false}>
                      View Products
                    </Link>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="https://img.freepik.com/free-photo/grunge-concrete-material-background-texture-wall-concept_53876-33580.jpg?size=626&ext=jpg"
                    width={300}
                    height={200}
                    alt="Farmer 4"
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">Amani Salehe</h3>
                        <p className="text-sm text-muted-foreground">Fruit Farmer</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Verified</Badge>
                  </div>
                  <p className="text-muted-foreground">Offering a wide variety of fresh, locally-grown fruits.</p>
                  <div className="flex items-center justify-between">
                    <Link href="#" className="text-primary hover:underline" prefetch={false}>
                      View Products
                    </Link>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Browse Products</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find the freshest produce and support local farmers.
                </p>
              </div>
              <div className="w-full max-w-lg">
                <form className="flex gap-2">
                  <Input type="search" placeholder="Search products..." className="flex-1" />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <FilterIcon className="h-5 w-5" />
                        <span className="sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>Organic</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Local</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Dairy</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Produce</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button type="submit">Search</Button>
                </form>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <img
                    src="https://img.freepik.com/free-photo/grunge-concrete-material-background-texture-wall-concept_53876-33580.jpg?size=626&ext=jpg"
                    width={300}
                    height={200}
                    alt="Product 1"
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold">Organic Apples</h3>
                  <p className="text-muted-foreground">Fresh, crisp apples grown on our family farm.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-primary font-semibold">100,000/Tsh</div>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="https://img.freepik.com/free-photo/grunge-concrete-material-background-texture-wall-concept_53876-33580.jpg?size=626&ext=jpg"
                    width={300}
                    height={200}
                    alt="Product 2"
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold">Grass-Fed Beef</h3>
                  <p className="text-muted-foreground">High-quality beef from our sustainable cattle farm.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-primary font-semibold">200,000/Tsh</div>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="https://img.freepik.com/free-photo/grunge-concrete-material-background-texture-wall-concept_53876-33580.jpg?size=626&ext=jpg"
                    width={300}
                    height={200}
                    alt="Product 3"
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold">Fresh Eggs</h3>
                  <p className="text-muted-foreground">Cage-free eggs from our family-owned poultry farm.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-primary font-semibold">500,000/Tsh</div>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="https://img.freepik.com/free-photo/grunge-concrete-material-background-texture-wall-concept_53876-33580.jpg?size=626&ext=jpg"
                    width={300}
                    height={200}
                    alt="Product 4"
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold">Organic Carrots</h3>
                  <p className="text-muted-foreground">Fresh, crunchy carrots grown without pesticides.</p>
                  <div className="flex items-center justify-between">
                    <div className="text-primary font-semibold">120,000/Tsh</div>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CropIcon className="h-8 w-8" />
            <span className="text-xl font-bold">SokoPlus</span>
          </div>
          <nav className="flex gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Farmers
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Products
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false} />
          </div>
        </div>
      </footer>
    </div>
  )
}

function CropIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2v14a2 2 0 0 0 2 2h14" />
      <path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </svg>
  )
}


function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
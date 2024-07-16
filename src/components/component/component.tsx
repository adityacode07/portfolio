import Image from 'next/image';
import Link from 'next/link';
export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-muted text-primary py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CodeIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Aditya Yadav</span>
          </Link>
        </div>
        <nav className="flex items-center gap-2 sm:gap-7 ">
          <Link href="#about" className="text-sm font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:underline" prefetch={false}>
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:underline" prefetch={false}>
            Projects
          </Link>
          <Link href="#articles" className="text-sm font-medium hover:underline" prefetch={false}>
            Articles
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="about" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
                <p className="mt-4 text-muted-foreground">
                  Hi, I&apos;m Aditya Yadav, a dedicated fullstack developer with a strong expertise in building scalable frontend and backend systems. I specialize in creating modern, responsive web applications and websites, leveraging the latest technologies to deliver high-performance solutions.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-md bg-muted p-4 text-center">
                    <h3 className="text-2xl font-bold">2+</h3>
                    <p className="text-muted-foreground">Years of Experience</p>
                  </div>
                  <div className="rounded-md bg-muted p-4 text-center">
                    <h3 className="text-2xl font-bold">12+</h3>
                    <p className="text-muted-foreground">Completed Projects</p>
                  </div>
                  <div className="rounded-md bg-muted p-4 text-center">
                    <h3 className="text-2xl font-bold">Full Stack Development</h3>
                    <p className="text-muted-foreground">Core Skills</p>
                  </div>
                  <div className="rounded-md bg-muted p-4 text-center">
                    <h3 className="text-2xl font-bold">React, Express</h3>
                    <p className="text-muted-foreground">Frameworks</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <Image
                  src="/pfp.jpg"
                  width={400}
                  height={400}
                  alt="Profile"
                  className="aspect-square overflow-hidden rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                <CodeIcon className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                <p className="text-muted-foreground text-sm">
                  Proficient in modern JavaScript, including ES6+ features and popular frameworks/libraries like React and Next.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                <DatabaseIcon className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-semibold mb-2">Databases</h3>
                <p className="text-muted-foreground text-sm">
                  Experience working with SQL and NoSQL databases, such as PostgreSQL, MySQL, and MongoDB.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                <CloudIcon className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-semibold mb-2">Cloud</h3>
                <p className="text-muted-foreground text-sm">
                  Familiar with cloud platforms like AWS for hosting and deploying web applications.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                <CodepenIcon className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-semibold mb-2">Styling</h3>
                <p className="text-muted-foreground text-sm">
                  Proficient in styling with Tailwind CSS and vanilla CSS, leveraging modern techniques for responsive design and layout.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                <ServerIcon className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-semibold mb-2">Backend</h3>
                <p className="text-muted-foreground text-sm">
                  Experience building scalable and secure backend systems using Node.js, Express, and other server-side technologies.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
                <GitGraphIcon className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-semibold mb-2">Version Control</h3>
                <p className="text-muted-foreground text-sm">
                  Proficient in using Git and GitHub for version control and collaboration on web development projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-20 px-6 md:px-12 bg-muted">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/p1.jpg"
                  width={600}
                  height={400}
                  alt="Dev Directory"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Dev Directory</h3>
                  <p className="text-muted-foreground mb-4">
                    A platform offering a curated collection of learning resources for developers. Discover and share your favorite resources contributed by the developer community, including you.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://thedevdirectory.vercel.app/"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="https://github.com/adityacode07/DevDirectory"
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/p2.jpg"
                  width={600}
                  height={400}
                  alt="MultiLingo Connect"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">MultiLingo Connect</h3>
                  <p className="text-muted-foreground mb-4">
                    MultiLingo-Connect breaks down language barriers by automatically translating messages, enabling seamless communication between users of different languages across the globe.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://chatxapp-de93b.web.app/"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="https://github.com/adityacode07/MultiLingo-Connect"
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="articles" className="py-12 md:py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/a1.jpg"
                  width={600}
                  height={400}
                  alt="Article Title 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">How to Build a RESTful API with Express.js: A Step-by-Step Guide</h3>
                  <p className="text-muted-foreground mb-4">
                   Dive into the world of React Hooks and learn how to leverage them to build more efficient and
                    maintainable web applications.
                  </p>
                  <Link
                    href="https://medium.com/@adityaabes2004/how-to-build-a-restful-api-with-express-js-a-step-by-step-guide-a5633fb4b94e"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false} target="_blank" 
  rel="noopener noreferrer"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/a2.jpg"
                  width={600}
                  height={400}
                  alt="Article Title 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Mastering Data Validation with Zod in Your Backend</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn how to optimize your web applications for better performance, including techniques for image
                    optimization, code splitting, and more.
                  </p>
                  <Link
                    href="https://medium.com/@adityaabes2004/mastering-data-validation-with-zod-in-your-backend-6c3bd2fbd6fd"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false} target="_blank" 
  rel="noopener noreferrer"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-20 px-6 md:px-12 bg-muted">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
    <div className="bg-background rounded-lg p-6 shadow-md">
      <div className="grid grid-cols-3 gap-4">
        <Link
          href="mailto:adityaabes2004@gmail.com"
          className="flex flex-col items-center justify-center bg-muted rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors"
          prefetch={false}
        >
          <MailIcon className="h-8 w-8 mb-2" />
          <span>Gmail</span>
        </Link>
        <Link
          href="https://twitter.com/AdityaYadavz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-muted rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors"
          prefetch={false}
        >
          <TwitterIcon className="h-8 w-8 mb-2" />
          <span>Twitter</span>
        </Link>
        <Link
          href="https://github.com/adityacode07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-muted rounded-lg p-4 hover:bg-accent hover:text-accent-foreground transition-colors"
          prefetch={false}
        >
          <GithubIcon className="h-8 w-8 mb-2" />
          <span>GitHub</span>
        </Link>
      </div>
    </div>
  </div>
</section>
      </main>
      <footer className="bg-muted text-primary py-4 px-6 text-center">
        <p>&copy; 2024 Aditya Yadav. All rights reserved.</p>
      </footer>
    </div>
  );
}
function CloudIcon(props:any) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function CodeIcon(props:any) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CodepenIcon(props:any) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon(props:any) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function GitGraphIcon(props:any) {
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
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function ServerIcon(props:any) {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}


function XIcon(props:any) {
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


function GithubIcon(props:any) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function MailIcon(props:any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}




function TwitterIcon(props:any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


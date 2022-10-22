import { UnorderedList, ListItem } from '@chakra-ui/react'
import { IMG_DATA, POST_DATES, POST_TAGS, POST_VIEWS } from 'constants/blogPosts'
import { CustomLink } from 'components/CustomLink'
import { PostLayout } from 'components/blog/PostLayout'
import { Paragraph, PostFooter, PostHeading } from 'components/blog/PostElements'
import { NextSeo } from 'next-seo'

const postSEO = {
  title: "Solo launching an online product as a frontend developer - Part 1",
  description: "The story of creating an online product by myself for the first time - Part 1",
  canonical: 'https://www.fullcontextdevelopment.com/blog/solo-launching-online-product',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/blog/solo-launching-online-product',
    title: 'Solo launching an online product as a frontend developer - Part 1',
    description: 'The story of creating an online product by myself for the first time - Part 1',
    site_name: 'Full Context Development Blog',
    type: 'article'
  }
}

export default function Post() {
  return (
    <PostLayout
      title='Solo launching an online product as a Frontend developer - Part 1'
      tags={POST_TAGS.launch}
      svg={svg}
      imgAlt={IMG_DATA.launch.alt}
      imgSrc={IMG_DATA.launch.src}
      publishDate={POST_DATES.launch.published}
      updateDate={POST_DATES.launch.lastUpdated}
      views={POST_VIEWS.launch}
    >
      <NextSeo {...postSEO} />
      <>
        <PostHeading>
          It was a wild ride
        </PostHeading>
        <Paragraph>
          Today I'm releasing the Full Context Software Development online book in early access, after 460 commits and nearly 2 years in the making.
          This is the introductory post of the series about the journey that led me here.
          I will focus on the technical parts but also share some personal aspects.
          It was a trip with many ups and many downs, bringing both personal and professional growth through sweat and tears. 
        </Paragraph>
        <PostHeading>
          The goal
        </PostHeading>
        <Paragraph>
          I would like to show you what it's like to build a scalable, secure, cost-effective, basic but functionally complete production ready
          web application with user management and payment built-in, that also complies with all applicable legal regulations.
          I will show you the bigger challenges and the (hopefully) smart ways to
          solve them solo. It's not a technical tutorial. I won't be showing you dummy code that does "user sign-up" in 200 lines neglecting all
          the important non-functional aspects of the process like observability (logging, monitoring), security (rate-limiting, obsessive validation, handling
          every single possible user and runtime error with graceful degradation and meaningful error messages) and more. I also won't be showing you "production code"
          that does all this, because that's better done in some other format.
          What I will do is describing the problems, my solutions and some alternatives, sometimes my failed attempts too. It will be interesting!
        </Paragraph>
        <PostHeading>
          About me
        </PostHeading>
        <Paragraph>
          Here's a little bit about my technical background to give you context for the challenges I faced.
          Up to this day, I have around 7 years of experience working in the frontend/web world.
          I was in a lead frontend developer position for more than a year when I quit my job to work on this material full time.
          Before that I used React, Angular 2+ and Angular.js. Vue and a dozen other technolgoies professionally for companies of every size
          in different industries like small-business real estate, global academic and law publishing,
          and multiple mid-size companies in the renewable energy domain.
          I only ever deployed a site to production myself on my first project. That's also the only occasion when I designed something.
          Can you guess which one was that? Yes, right, small-business Wordpress.
          The point is that; I was not experienced in every aspect of creating web applications. However, I sure had good insight into the parts I didn't do hands-down.
          I felt ready to do it alone. And quite uncatharticly pulled it off for the most part. :)
        </Paragraph>
        <PostHeading>
          About the project
        </PostHeading>
        <Paragraph>
          To give you more context about the technical decisions I made, here are my initial goals about the capabilities of the system.
          I aimed high. My dream is to sell the book to 100.000 developers so I wanted to build a web app that can support that many users.
          That could have been done easily if I were to use solutions like Auth0 or AWS Amplify, AWS Lambda or Firebase, Sendgrid,
          and some logging provider, but even only for these the monthly price I estimated was above 8000$!
          That's nearly 100k in a year only for letting the app to be operational.
          This is not a product that generates monthly recurring revenue so that kind of money is simply unaffordable to me.
          I had to go for lower level & lower cost, but still low -if possible zero- maintenance solutions.
        </Paragraph>
        <PostHeading>
          The problems
        </PostHeading>
        <Paragraph>
          This is the list of the hardest challenges I had to overcome:
          <UnorderedList pl='10px' ml='10px' mt='10px' spacing={2}>
            <ListItem>
              <b>Authentication</b>. I have never built authentication myself and I was blissfully negligent of its details before.
              This might outrage you. How comes a lead developer doesn't know this? It partially outrages me.
              However, at least in my experience there are always more things to be done at work than you can handle
              and one of the strategies I developed to solve this issue is lazy-evaluation.
              If things are going smooth and most likely will stay that way, I defer understanding the aspects of the systems that don't directly involve me.
              Auth never involved me more than calling some client-side functions. That's one of the reasons why I wanted to learn it now.
            </ListItem>
            <ListItem>
              <b>Serverless architecture</b>. If you choose the right providers it simply doesn't make sense not to go serverless and cloud native in these days
              for a solo project. Finding the right ones, however, wasted 3 months of my work. Not the search itself, but realizing that I made the wrong choices
              and fixing the problems. The nice thing about most serverless solutions is that they either provide Node.js or Web API support meaning
              as a frontend developer I felt right at home. Especially with my job exposure to full-stack and BE. I think we are really living in the age of
              frontend engineers.
            </ListItem>
            <ListItem id='email'>
              <b>Email</b>. I have never thought I would add email to a list like this but I choose AWS SES for the by far lowest price you can get and I have to say
              I appreciate every single bit of work that has been done to make creating emails easy because if you go low-lever it's a real pain.
              No, as a frontend developer, it's a nightmare. A travel back in time into a world where even &lt;div&gt; is an unsupported futuristic concept!
              I consider myself much more lucky now to have entered the field in 2014!
            </ListItem>
            <ListItem>
              <b>Security</b>. I had the luck and luxury of being shielded from the malicious side of the internet at work by colleagues for 95% of my career.
              The rest at the very beginning was "solved" by Wordpress plugins. So I had no real experience in this area. It's also a topic
              I always wanted to get more familiar with and oh boy I did now.
            </ListItem>
            <ListItem>
              <b>GDPR, cookies and regulations</b>. Another part of the web-reality I was protected from so far.
              Not anymore! As the owner of a product, I also own the legal responsibilities coming along with it and it is a real burden.
              There's a lot to understand and a lot of things to comply with and no comprehensive guide.
            </ListItem>
            <ListItem>
              <b>Taxes</b>. It's simply crazy! I still don't understand how do all those Stripe users pay their due taxes all around the world?
              Did you not know? You are supposed to pay VAT/GST/Sales tax to the tax authority of the country which your customer is a resident of and in accordance with
              their local laws. There's a nice 1700+
              page <CustomLink to='https://www.ey.com/en_gl/tax-guides/worldwide-vat-gst-and-sales-tax-guide' target='_blank'>PDF</CustomLink> available
              that details what you should do around the world.
              Or you can use a similar solution to what I found.
            </ListItem>
            <ListItem>
              <b>Design</b>. I have to say, I'm not satisfied with the design of the site. I also have to admit it's much better than anything that I have ever made before.
              It will be refined later. Because building a proper web app, while writing a (hopefully) ground-braking book and also marketing it is
              a tremendous amount of work, I had to settle with a good-enough approach about all but the most essential aspects of the entire project.
              It kills me every day, but that's how it goes if I ever want to deliver it. Back to the point, I have no design skills or knowledge, yet I had to
              somehow create a visually OK site. It took me many failed attempts to arrive where it is today, and I sure have learnt a lot during the process.
              Including some very dumb lessons, like using design software is way more effective than building out the design... Even if that design software is Paint.net.
            </ListItem>
            <ListItem>
              <b>Marketing</b>. On a website, everything is marketing. Yes, everything. I had to acquire a new perspective about UI but that's far from it.
              I had to learn effective writing. Which honestly, I didn't manage to do. I'm bad with words and not a native English speaker, nor have I ever lived among native speakers.
              Nonetheless, I improved a lot and I hope it's most visible on the landing page text. But again, marketing doesn't stop there and
              most of what remains is still ahead of me.
            </ListItem>
          </UnorderedList>
        </Paragraph>
        <PostHeading>
          You have a say
        </PostHeading>
        <Paragraph>
          This is all I planned for this post. If you feel strongly about some of the challenges above let me know in the comments at the bottom or
          through <CustomLink to='https://twitter.com/fullctxdev' target='_blank'>Twitter</CustomLink> and I will prioritize writing about those.
        </Paragraph>
        <PostFooter />
      </>
    </PostLayout>
  )
}

const svg = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTk5Ij48ZGVmcy8+PHBhdGggZmlsbD0iIzM4M2Y1YSIgZD0iTTAgMGgzMDB2MTk5SDB6Ii8+PGcgZmlsbC1vcGFjaXR5PSIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjYgLjYpIHNjYWxlKDEuMTcxODgpIj48Y2lyY2xlIHI9IjEiIGZpbGw9IiNmZmZmY2EiIHRyYW5zZm9ybT0ibWF0cml4KC0xMS44NjczIC0zLjUyMTg0IDEzLjY1ODU0IC00Ni4wMjQzMyA2NS4zIDE1My44KSIvPjxjaXJjbGUgcj0iMSIgZmlsbD0iIzAwMDAwMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTI1NC4yMzY3NCAtMTkuNzE1IDUuNDI5ODMgLTcwLjAyMDkgMTI3LjEgMzUuOCkiLz48Y2lyY2xlIHI9IjEiIGZpbGw9IiNmZmE2NzkiIHRyYW5zZm9ybT0icm90YXRlKC0xNzcuOSA5NS41IDcyLjkpIHNjYWxlKDQxLjY4NTIzIDExLjc3NzQyKSIvPjxjaXJjbGUgcj0iMSIgZmlsbD0iI2UwYWY5MyIgdHJhbnNmb3JtPSJtYXRyaXgoLTM5LjAzOTkxIC4wMzY2MyAtLjAxMzI1IC0xNC4xMjA1NyA1My44IDE0OS4zKSIvPjxwYXRoIGZpbGw9IiNmOGU1YzMiIGQ9Ik04My4xIDc0LjNMNTkuNyAxODUgOTAuNiA3MC44bDI1LTU0LjV6Ii8+PGNpcmNsZSByPSIxIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09Im1hdHJpeCgtNi4zODAxIDM3LjMwOTU4IC00LjgxMjE4IC0uODIyOSA2Ni4yIDE2NS4zKSIvPjxjaXJjbGUgY3g9IjE5NiIgY3k9IjYiIHI9IjY5IiBmaWxsPSIjMDAwOTFlIi8+PGNpcmNsZSByPSIxIiBmaWxsPSIjMDAwNTE1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNjguOSAyNCAxMC44KSBzY2FsZSg2OC4xMzE0NSAzMy43NzI1OSkiLz48ZWxsaXBzZSBjeD0iMTk2IiBjeT0iMTY4IiBmaWxsPSIjMjQxNjAwIiByeD0iMTIzIiByeT0iNyIvPjxjaXJjbGUgcj0iMSIgZmlsbD0iIzc2NWQ2OSIgdHJhbnNmb3JtPSJtYXRyaXgoNDQuMDk1NzIgLTE1LjI0NDY2IDQuNDcyOTIgMTIuOTM4MDggMjUuNSAxNDEuMykiLz48cGF0aCBmaWxsPSIjZmViYTkwIiBkPSJNMTY2LjcgMTU4LjFsMjcuNS45aDM3LjdsLTM4LjItMTZ6Ii8+PGNpcmNsZSByPSIxIiBmaWxsPSIjMGUyMTNlIiB0cmFuc2Zvcm09InJvdGF0ZSgxNjIuMSAxMi41IDQxLjkpIHNjYWxlKDQ5Ljg0MzUxIDM1LjY0MzM2KSIvPjwvZz48L3N2Zz4="

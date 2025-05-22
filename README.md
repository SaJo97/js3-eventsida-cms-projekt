This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview
This project is an events page built using Next.js 15 and a Headless CMS. The primary goal is to create a dynamic and responsive web application that displays a list of upcoming events, with all content managed through a CMS. The application allows for easy updates to the content via the CMS, ensuring that the information displayed is always current.

## Purpose
The purpose of this assignment is to practice structuring a Next.js application and customizing the frontend based on content retrieved from a CMS. This project involves fetching data via API, displaying dynamic pages, and working with modern framework principles

Features
* Home Page ("/"): Displays content fetched from the CMS, including at least one image, one title, and one subtitle.
* Events Listing Page ("/events"): Lists all upcoming events, sorted by date.
* Event Detail Page ("/events/[slug]"): Each event has its own detail page where information is retrieved from the CMS.
* Dynamic Content: All content (text, images, and metadata) is fetched dynamically from the configured CMS.
* Responsive Design: The application is designed to be responsive, ensuring a good user experience on various devices.
* Event Filtering: The application allows filtering between upcoming and past events.

# Implementation Details

## Technologies Used
* Next.js 15: A React framework for building server-rendered applications.
* Headless CMS: The CMS used for this project can be either Strapi or Sanity, configured to manage event data.
* React: For building the user interface components.
* CSS/Styled Components: For styling the application and ensuring responsiveness.

# Data Structure

## Each event in the CMS includes the following fields:
* title: The title of the event.
* description: A brief description of the event.
* date / dateTime: The date and time when the event will take place.
* image: An image associated with the event.
* location: The location where the event will be held.

## API Integration
The application fetches data from the CMS using API calls. The data is then used to populate the home page, events listing page, and individual event detail pages.

# Getting Started

1. Clone the repository:
* git clone <repository-url>
* cd <project-directory>
2. Install the dependencies:
* npm install

3. Configure the CMS:
* Set up your Headless CMS (Strapi or Sanity) and create the necessary content types and entries for events.
* Update the API endpoint in the application to point to your CMS.

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# Conclusion
This project demonstrates the ability to create a dynamic events page using Next.js and a Headless CMS. It showcases the integration of modern web development practices, including API data fetching, responsive design, and content management. The application is designed to be easily maintainable and scalable, allowing for future enhancements and features.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

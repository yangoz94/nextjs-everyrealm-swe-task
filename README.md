# Everyrealm SWE Task

- The app is deployed on Vercel for convenience and can be accessed via [this link](https://nextjs-everyrealm-swe-task.vercel.app/).  
- I used client side data fetching with react-query because of the following reasons;
  - assuming that data integrity needs to maintained at the highest level to avoid stale data.
  - no requirement for SEO specified in the instructions.
  - the data size is not specified in the instructions, making it difficult to determine if SSG or ISR would cause ridiculous build times or not.
  - flexibility to expand with limited fetching + infinite scrolling or pagination to balance performance and UX.

That being said, ISR would also be a good choice, but some users would have stale data for a short period of time if the data is updated frequently. Since this task doesnt specify the API, data size, SEO reqirements and build time limits, I went with the most popular choice. 

SSR would also give us the most-recent data on every page request but it would cause a bad UX if the data size was very large as the initial loading time would be longer depending on the data size to be fetched.

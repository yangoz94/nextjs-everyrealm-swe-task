# Everyrealm SWE Task  

+ The app will be deployed on Vercel for convenience and the link will be added here.  

+ I used client side data fetching with react-query because of the following reasons;
    - the assumption that data entegrity is critically important(medium vs high vs critical).    
    - data integrity is maintained at the highest level to avoid stale data.  
    - no requirement for SEO specified in the instructions.  
    - the data amount is not specified in the instructions, making it difficult to determine SSG would cause ridiculous build times or not.    
    - possible to expand with limited fetching + infinite scrolling or pagination to balance performance and UX.  

That being said, ISR would also be a good choice, but some users would have stale data for a short period of time if the data is updated frequently. Since this task doesnt specify the API, data size, SEO reqirements and build time limits, I went with the most popular choice.




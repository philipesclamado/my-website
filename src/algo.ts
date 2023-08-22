export const groupPostsByYear = (posts: Post[]) => {
  return posts.reduce<{ [year: string]: Post[] }>((grouped, post) => {
    const year = post.datePublished.split("-")[0];
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(post);
    return grouped;
  }, {});
};

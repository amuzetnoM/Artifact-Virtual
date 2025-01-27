export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'ARTIFACT VIRTUAL';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Project Roadmap';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© 2025 Artifact Virtual, (AV), Artifact Development Engine (ADE), Serum (S3). All rights reserved..';

  return {
    name,
    blogTitle,
    footerText,
  };
};

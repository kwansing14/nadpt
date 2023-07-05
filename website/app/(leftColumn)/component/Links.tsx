import { TransitionLink } from 'narpt';

const Links = () => {
  return (
    <div className='flex flex-col gap-2 links-cmp'>
      <h2>Overview</h2>
      <TransitionLink href='/get-started'>Get started</TransitionLink>
      <h2>API</h2>
      <TransitionLink href='/transitionlayout'>
        {'<TransitionLayout>'}
      </TransitionLink>
      <TransitionLink href='/transitionlink'>
        {'<TransitionLink>'}
      </TransitionLink>
      <TransitionLink href='/transitiondiv'>{'<TransitionDiv>'}</TransitionLink>
      <h2>Examples</h2>
      <TransitionLink href='/simplepage'>Simple page</TransitionLink>
    </div>
  );
};

export default Links;

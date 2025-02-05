import cx from 'classnames'

interface SkeletonProps {
  className?: string
}

export const Skeleton = (props: SkeletonProps) => {
  const { className } = props

  return (
    <div className={cx(className, 'animate-pulse bg-gray-200 bg-opacity-10')} />
  )
}

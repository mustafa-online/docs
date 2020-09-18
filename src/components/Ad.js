export function Ad() {
  return (
    <div id="shopper-ads">
      <a
        href="https://squashr.io/?utm_source=laravelshopper&utm_medium=sidebar-widget"
        className="mt-3 block"
      >
        <img
          src={require('@/img/squashr-ads.png').default}
          alt="Squashr"
          width={457}
          height={336}
        />
      </a>
      <p className="mt-4 text-gray-700">
        <a
          href="https://squashr.io/?utm_source=laravelshopper&utm_medium=sidebar-widget"
          className="text-gray-700"
        >
          Upload and compress files in real-time with Squashr.
        </a>
      </p>
      <div className="mt-2">
        <a
          href="https://squashr.io/?utm_source=laravelshopper&utm_medium=sidebar-widget"
          className="text-sm text-blue-700 font-medium hover:underline"
        >
          Learn more →
        </a>
      </div>
    </div>
  )
}

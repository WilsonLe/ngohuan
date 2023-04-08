import legacyConfig from '../legacy-config';
export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          {legacyConfig.footer.title}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {legacyConfig.footer.topLeft.title}
            </h3>
            <dl className="mt-2 text-base text-gray-500">
              <div>
                <dt className="sr-only">
                  {legacyConfig.footer.topLeft.text1_screen_reader_info}
                </dt>
                <dd>{legacyConfig.footer.topLeft.text1}</dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">
                  {legacyConfig.footer.topLeft.text2_screen_reader_info}
                </dt>
                <dd>{legacyConfig.footer.topLeft.text2}</dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">
                  {legacyConfig.footer.topLeft.text3_screen_reader_info}
                </dt>
                <dd>{legacyConfig.footer.topLeft.text3}</dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">
                  {legacyConfig.footer.topLeft.text4_screen_reader_info}
                </dt>
                <dd>{legacyConfig.footer.topLeft.text4}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

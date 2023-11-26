import Image from 'next/image';

export function Testimonials() {
  return (
    <section className="border-t py-12">
      <div className="mx-auto max-w-none px-5 sm:max-w-[90%] sm:px-0 2xl:max-w-8xl">
        <h2 className="text-center text-2xl font-bold">Driven by Feedback</h2>
        <div className="mt-4 columns-1 sm:columns-2 lg:columns-4">
          <div className="-mx-4">
            <div className="inline-block px-4 pt-4">
              <figure className="rounded-2xl bg-neutral-50 p-8">
                <blockquote className="text-sm leading-6 text-neutral-700">
                  “”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-start gap-5">
                  <Image
                    src="/avatars/oliviaparker.avif"
                    alt=""
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full border bg-white"
                  />
                  <div>
                    <p className="text-sm font-semibold">Olivia Parker</p>
                    <p className="mt-1 text-sm text-neutral-600">
                      @oliviaparker
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="inline-block px-4 pt-4">
              <figure className="rounded-2xl bg-neutral-50 p-8">
                <blockquote className="text-sm leading-6 text-neutral-700">
                  “”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-start gap-5">
                  <Image
                    src="/avatars/emmathompson.avif"
                    alt=""
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full border bg-white"
                  />
                  <div>
                    <p className="text-sm font-semibold">Emma Thompson</p>
                    <p className="mt-1 text-sm text-neutral-600">
                      @emmathompson
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="inline-block px-4 pt-4">
              <figure className="rounded-2xl bg-neutral-50 p-8">
                <blockquote className="text-sm leading-6 text-neutral-700">
                  “”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-start gap-5">
                  <Image
                    src="/avatars/sophiarodriguez.avif"
                    alt=""
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full border bg-white"
                  />
                  <div>
                    <p className="text-sm font-semibold">Sophia Rodriguez</p>
                    <p className="mt-1 text-sm text-neutral-600">
                      @sophiarodriguez
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="inline-block px-4 pt-4">
              <figure className="rounded-2xl bg-neutral-50 p-8">
                <blockquote className="text-sm leading-6 text-neutral-700">
                  “”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-start gap-5">
                  <Image
                    src="/avatars/danjohnson.avif"
                    alt=""
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full border bg-white"
                  />
                  <div>
                    <p className="text-sm font-semibold">Daniel Johnson</p>
                    <p className="mt-1 text-sm text-neutral-600">@danjohnson</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

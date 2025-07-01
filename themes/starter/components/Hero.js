/* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
const AlgoliaSearchModal = dynamic(() => import('@/themes/starter/components/AlgoliaSearchModal'), { ssr: false })
/**
 * 英雄大图区块
 */
export const Hero = (props) => {
  console.log(props, "-------props-----------")
  const router = useRouter()
  const searchModal = useRef(null)

  function handleSearch() {
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal.current.openSearch()
    } else {
      router.push('/search')
    }
  }
  return <>
    {/* <!-- ====== Hero Section Start --> */}
    {/* <div
      id="home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    > */}
    <div
      id="home"
      className="relative h-screen bg-black pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
    <div className="container">
      {/* <div className="-mx-4 flex flex-wrap items-center"> */}
      <div className="-mx-4 flex flex-col items-center">
        <div className="w-full px-4">
          <div
            className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
            data-wow-delay=".2s"
          >
            {/* 主标题 */}
            <h1
              className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
            >
              {/* {siteConfig('STARTER_HERO_TITLE_1', null, CONFIG)} */}
              <span>探花万人迷+</span><span className='text-red-700 ml-2'>会员系统</span>
            </h1>
            {/* 次标题 */}
            <p
              className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]"
            >
               Your one-stop favorites will never be lost!<br></br>
              {siteConfig('STARTER_HERO_TITLE_2', null, CONFIG)}
            </p>

            {/* 按钮组 */}
            <ul
              className="mb-10 flex flex-wrap items-center justify-center gap-5"
            >
              {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, CONFIG) &&
                <li>
                  <a onClick={handleSearch}
                    href='javascript:void(0)'
                    className="inline-flex items-center justify-center rounded-md bg-white px-20 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                  >
                    {/* href={siteConfig('STARTER_HERO_BUTTON_1_URL', null, CONFIG)} */}
                    {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, CONFIG)}
                  </a>
                </li>
              }
              {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, CONFIG) &&
                <li>
                  <a
                    href={siteConfig('STARTER_HERO_BUTTON_2_URL', null, CONFIG)}
                    target="_blank"
                    className="flex items-center rounded-md bg-white/[0.12] px-16 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark" rel="noreferrer"
                  >
                    {siteConfig('STARTER_HERO_BUTTON_2_ICON', null, CONFIG) && <img className='mr-4' src={siteConfig('STARTER_HERO_BUTTON_2_ICON', null, CONFIG)} />}
                    {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, CONFIG)}
                  </a>
                </li>
              }
            </ul>

          </div>
        </div>

        {/* 产品预览图片 */}
        {siteConfig('STARTER_HERO_PREVIEW_IMAGE', null, CONFIG) && <div className="w-full px-4">
          <div
            className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
            data-wow-delay=".25s"
          >

            <div className="mt-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig('STARTER_HERO_PREVIEW_IMAGE', null, CONFIG)}
                alt="hero"
                className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
              />
            </div>

            {/* 背景图 */}
            <div className="absolute -left-9 bottom-0 z-[-1]">
              <img src='/images/starter/bg-hero-circle.svg' />
            </div>
            <div className="absolute -right-6 -top-6 z-[-1]">
              <img src='/images/starter/bg-hero-circle.svg' />
            </div>
          </div>
        </div>
        }

      </div>
    </div>
  </div >
    <AlgoliaSearchModal cRef={searchModal} {...props} />
  {/* <!-- ====== Hero Section End --> */ }
    </>
}

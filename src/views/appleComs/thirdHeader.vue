<script setup lang="ts"></script>

<template>
  <section class="section-design">
    <div class="design-display">
      <div class="lift-transition-sticky-content">
        <div class="design-display-content">
          <div class="hardware-grid">
            <div class="pro-max">
              <div class="product-spec">
                <p>iPhone 13 Pro Max</p>
                <p>6.7 英寸</p>
              </div>
              <picture class="overview-design-design-display-pro-max-1">
                <img
                  src="https://www.apple.com.cn/v/iphone-13-pro/d/images/overview/design/design_display_pro_max__bv0sb70j43jm_large.png"
                  alt=""
                />
              </picture>
            </div>
            <div class="pro">
              <div class="product-spec">
                <p>iPhone 13 Pro Max</p>
                <p>6.7 英寸</p>
              </div>
              <picture class="hardware-composition-wrapper">
                <img
                  src="https://www.apple.com.cn/v/iphone-13-pro/d/images/overview/design/design_display_pro__e31yaos8kpme_large.png"
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="less" scoped>
.section-design {
  --static-row-min-height: 900px;
  background-color: #fff;
  .design-display {
    z-index: 0;
    position: relative;
    margin-bottom: var(--lt-container-overlap);
    margin-left: auto;
    margin-right: auto;
    width: 980px;
  }
  .lift-transition-sticky-content {
    min-height: var(--lt-content-min-height);
    position: sticky;
    top: var(--lt-sticky-top);

    .design-display-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding-bottom: 75px;
      min-height: var(--lt-content-min-height);
      .hardware-grid {
        --min-dist-to-vp-boundary: 20px;
        --hardware-centers-offset: 162px;
        grid-column-gap: 0;
        grid-row-gap: 0;
        padding-left: 0;
        padding-right: 0;
        margin-top: 0;
        margin-right: auto;
        margin-left: auto;
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        .pro-max {
          --hardware-width: 321px;
          --x-axis-dir: -1;
          margin-right: calc(var(--hardware-width) / -2);
          justify-content: flex-end;
          display: flex;
          align-items: center;
          grid-column: span 6;
          position: relative;
          box-sizing: border-box;
          transform: translate(calc(var(--hardware-centers-offset) / -2));
          .product-spec {
            margin-right: 2.0588235294rem;
            text-align: right;
            z-index: 1;
            position: relative;
            padding-top: 5px;
            P {
              color: #1d1d1f;
              &:nth-child(1) {
                margin: 10px 0 0;
                font-size: 19px;
                font-weight: 600;
              }
              &:nth-child(2) {
                font-size: 40px;
                line-height: 1.1;
                font-weight: 600;
                letter-spacing: 0em;
                margin: 0;
              }
            }
          }
          .overview-design-design-display-pro-max-1 {
            display: block;
            width: var(--p-width);
            height: var(--p-height);
            --p-width: 321px;
            --p-height: 650px;
          }
        }
        .pro {
          --hardware-width: 292px;
          --x-axis-dir: 1;
          margin-left: calc(var(--hardware-width) / -2);
          justify-content: flex-start;
          display: flex;
          align-items: center;
          grid-column: span 6;
          position: relative;
          box-sizing: border-box;
          transform: translateX(calc(var(--hardware-centers-offset) / 2));
          .product-spec {
            order: 2;
            margin-left: 2.0588235294rem;
            text-align: right;
            z-index: 1;
            position: relative;
            padding-top: 5px;
            P {
              color: #1d1d1f;
              &:nth-child(1) {
                margin: 10px 0 0;
                font-size: 19px;
                font-weight: 600;
              }
              &:nth-child(2) {
                font-size: 40px;
                line-height: 1.1;
                font-weight: 600;
                letter-spacing: 0em;
                margin: 0;
              }
            }
          }
          .hardware-composition-wrapper {
            z-index: 2;
            position: relative;
            align-self: flex-end;
            z-index: 2;
            order: 1;
          }
        }
      }
    }
  }
}
</style>

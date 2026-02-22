<script setup lang="ts">
// Cards are hardcoded in template for precise bento-grid placement
</script>

<template>
  <section id="features" class="features">
    <div class="features__inner">
      <div class="features__header">
        <h2>Our Features</h2>
        <p>
          Cosmetic excellence, high-precision restorations, and All-on-X
          expertise, everything crafted with care and technical mastery.
        </p>
      </div>

      <div class="features__grid">
        <!-- 1. Credit card — tall left column -->
        <div class="features__card features__card--credit">
          <i class="fa-solid fa-gift features__icon"></i>
          <h3>Your First Case, Backed by $150 Credit</h3>
          <p>
            Whether it's a single crown or a full-mouth restoration, your first
            case comes with a $150 lab credit!
          </p>
          <a href="#contact" class="features__cta">
            First Case Credit <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>

        <!-- 2. Cosmetic Excellence — top center-left -->
        <div class="features__card features__card--cosmetic">
          <i class="fa-solid fa-gem features__icon"></i>
          <h3>Cosmetic Excellence</h3>
        </div>

        <!-- 3. Tooth graphic — bottom center-left -->
        <div class="features__card features__card--tooth">
          <div class="features__tooth-graphic">
            <svg viewBox="0 0 120 140" class="features__tooth-svg">
              <path
                d="M60 8 C40 8 20 20 18 50 C16 75 30 100 40 120 C45 130 50 135 55 135 C58 135 60 128 60 120 C60 128 62 135 65 135 C70 135 75 130 80 120 C90 100 104 75 102 50 C100 20 80 8 60 8Z"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                stroke-width="1.5"
              />
              <path
                d="M60 8 C40 8 20 20 18 50 C16 75 30 100 40 120 C45 130 50 135 55 135 C58 135 60 128 60 120 C60 128 62 135 65 135 C70 135 75 130 80 120 C90 100 104 75 102 50 C100 20 80 8 60 8Z"
                fill="rgba(255,255,255,0.04)"
              />
            </svg>
            <i class="fa-solid fa-sparkles features__sparkle"></i>
          </div>
          <span class="features__beauty-tag">Maximum Beauty +</span>
        </div>

        <!-- 4. Scanner — spans rows 1-2, col 3 -->
        <div class="features__card features__card--scanner">
          <div class="features__scanner-ui">
            <div class="features__scanner-device">
              <div class="features__scanner-bar"></div>
              <span class="features__scanner-label">iScan32</span>
            </div>
            <div class="features__scanner-progress">
              <span>Scanning...</span>
              <div class="features__progress-track">
                <div class="features__progress-fill"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. High-Precision — bottom col 3 -->
        <div class="features__card features__card--precision">
          <i class="fa-solid fa-crosshairs features__icon"></i>
          <h3>High-Precision Restorations</h3>
        </div>

        <!-- 6. All-on-X title — top-right -->
        <div class="features__card features__card--allonx-title">
          <i class="fa-solid fa-teeth features__icon"></i>
          <h3>All-on-X Specialists</h3>
        </div>

        <!-- 7. All-on-X image — bottom-right -->
        <div class="features__card features__card--allonx-img">
          <img
            src="https://res.cloudinary.com/dpimsaaa4/image/upload/v1771785583/Menu_ALL_ON_X_Especialist_bfinfm.png"
            alt="All-on-X dental restoration options"
            class="features__allonx-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.features {
  padding: 6rem 2rem;
  background: $primary-dark;

  &__inner {
    max-width: 1400px;
    margin: 0 auto;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
    margin-bottom: 3rem;

    h2 {
      font-size: clamp(2rem, 4vw, 3.5rem);
      font-weight: 300;
      color: $text-light;
      flex-shrink: 0;
      letter-spacing: -0.02em;
    }

    p {
      max-width: 420px;
      font-size: 0.95rem;
      color: $text-secondary;
      line-height: 1.7;
      text-align: right;
    }
  }

  // ─── Bento Grid ───
  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto auto;
    gap: 0.75rem;
  }

  // ─── Base Card ───
  &__card {
    background: $surface-card;
    border: 1px solid $border-dark;
    border-radius: 1.5rem;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    transition: border-color 0.3s, transform 0.3s;
    overflow: hidden;

    &:hover {
      border-color: rgba($primary, 0.25);
      transform: translateY(-3px);
    }

    h3 {
      font-size: 1.15rem;
      font-weight: 600;
      color: $text-light;
      line-height: 1.3;
    }

    p {
      font-size: 0.85rem;
      color: $text-secondary;
      line-height: 1.6;
      margin-top: 0.75rem;
    }
  }

  // ─── Icon ───
  &__icon {
    font-size: 1.35rem;
    color: $primary;
    margin-bottom: 1rem;
  }

  // ─── 1. Credit card — full left column ───
  &__card--credit {
    grid-column: 1;
    grid-row: 1 / 4;
    justify-content: flex-start;
    gap: 0.75rem;
    background: linear-gradient(160deg,
        rgba($primary, 0.08) 0%,
        $surface-card 40%);
  }

  // ─── 2. Cosmetic Excellence ───
  &__card--cosmetic {
    grid-column: 2;
    grid-row: 1;
  }

  // ─── 3. Tooth graphic ───
  &__card--tooth {
    grid-column: 2;
    grid-row: 2 / 4;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 220px;
  }

  &__tooth-graphic {
    position: relative;
    width: 100px;
    height: 120px;
  }

  &__tooth-svg {
    width: 100%;
    height: 100%;
  }

  &__sparkle {
    position: absolute;
    top: -4px;
    right: -8px;
    font-size: 1rem;
    color: rgba($white, 0.3);
  }

  &__beauty-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 1.25rem;
    padding: 0.4rem 1rem;
    border-radius: 99px;
    background: rgba($white, 0.06);
    border: 1px solid rgba($white, 0.08);
    font-size: 0.7rem;
    font-weight: 500;
    color: $text-secondary;
    letter-spacing: 0.05em;
  }

  // ─── 4. Scanner ───
  &__card--scanner {
    grid-column: 3;
    grid-row: 1 / 3;
    align-items: center;
    justify-content: center;
    min-height: 260px;
  }

  &__scanner-ui {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 200px;
  }

  &__scanner-device {
    width: 100%;
    height: 80px;
    background: rgba($white, 0.04);
    border: 1px solid rgba($white, 0.08);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
  }

  &__scanner-bar {
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba($primary, 0.6), transparent);
    border-radius: 2px;
    animation: scan-sweep 2s ease-in-out infinite;
  }

  &__scanner-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: $text-secondary;
    letter-spacing: 0.05em;
  }

  &__scanner-progress {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    align-items: flex-start;

    span {
      font-size: 0.7rem;
      color: $text-muted;
    }
  }

  &__progress-track {
    width: 100%;
    height: 4px;
    background: rgba($white, 0.06);
    border-radius: 2px;
    overflow: hidden;
  }

  &__progress-fill {
    width: 65%;
    height: 100%;
    background: linear-gradient(90deg, $primary, lighten($primary, 10%));
    border-radius: 2px;
    animation: progress-animate 3s ease-in-out infinite;
  }

  // ─── 5. Precision ───
  &__card--precision {
    grid-column: 3;
    grid-row: 3;
  }

  // ─── 6. All-on-X Title ───
  &__card--allonx-title {
    grid-column: 4;
    grid-row: 1;
  }

  // ─── 7. All-on-X Image ───
  &__card--allonx-img {
    grid-column: 4;
    grid-row: 2 / 4;
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }

  &__allonx-image {
    width: 100%;
    max-width: 240px;
    object-fit: contain;
    filter: brightness(0.9) contrast(1.05);
    transition: transform 0.4s ease;
  }

  &__card--allonx-img:hover &__allonx-image {
    transform: scale(1.05);
  }

  // ─── CTA Button ───
  &__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
    padding: 0.75rem 1.5rem;
    border: 1px solid rgba($white, 0.2);
    border-radius: 99px;
    font-size: 0.85rem;
    font-weight: 500;
    color: $text-light;
    width: fit-content;
    transition: background 0.3s, border-color 0.3s;

    &:hover {
      background: rgba($primary, 0.15);
      border-color: $primary;
    }
  }
}

@keyframes scan-sweep {

  0%,
  100% {
    opacity: 0.3;
    transform: scaleX(0.6);
  }

  50% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes progress-animate {
  0% {
    width: 20%;
  }

  50% {
    width: 80%;
  }

  100% {
    width: 20%;
  }
}

// ─── Responsive ───
@media (max-width: 1024px) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  .features__card--credit {
    grid-column: 1 / 3;
    grid-row: auto;
  }

  .features__card--scanner {
    grid-column: auto;
    grid-row: auto;
  }

  .features__card--tooth {
    grid-row: auto;
  }

  .features__card--allonx-img {
    grid-row: auto;
  }
}

@media (max-width: 768px) {
  .features {
    &__header {
      flex-direction: column;
      gap: 1rem;

      p {
        text-align: left;
      }
    }
  }

  .features__grid {
    grid-template-columns: 1fr;
  }

  .features__card--credit {
    grid-column: 1;
  }
}
</style>

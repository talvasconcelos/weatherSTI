export const Info = ({title, children}) => (
  <div class='info-body'>
    <h3 class="info-title">{title}</h3>
    <div class="info-content">{children}</div>
    <div class="info-cta">
      <button class='btn'>see more &rarr;</button>
    </div>
  </div>
)

# Atualização dos cards Android — Google Play

Substitua **somente `index.html`** na raiz do repositório. `styles.css` foi incluído no ZIP por conveniência, mas não mudou. Mantenha a pasta `assets/`.

Os cards inteiros e seus QR Codes agora abrem os respectivos links de teste **interno**:

- ColorRush: https://play.google.com/apps/internaltest/4701640518979255019
- StackFactory: https://play.google.com/apps/internaltest/4701193205730693723
- Astro Horóscopo: https://play.google.com/apps/internaltest/4701730141449346868
- QRLivre Android: https://play.google.com/apps/internaltest/4700999649561881788

Os links secundários dos cards continuam independentes. QR Codes SVG não foram recriados; confirme se seu conteúdo aponta aos mesmos links. Participantes precisam estar incluídos no teste interno na Play Console com uma conta Google autorizada.

## Publicar (PowerShell)

```powershell
cd C:\Users\diego\Desktop\projetos\diegoluanfs
git add index.html
git diff --cached --check
git commit -m "feat(portfolio): direciona cards Android para testes internos do Google Play"
git push origin main
```

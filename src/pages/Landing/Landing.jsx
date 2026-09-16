import { useState } from 'react'
import styles from './Landing.module.css'
import logo from '../../assets/logo.jpg'
import demo from '../../assets/demo.png'

const nav = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'Perguntas', href: '#faq' },
]

const passos = [
  {
    passo: '1',
    titulo: 'Fale o pedido',
    texto:
      'Toque no microfone (ou digite) e fale sem cerimônia: "preciso de 20 etiquetas de picanha congelada sif 567".',
  },
  {
    passo: '2',
    titulo: 'A IA interpreta',
    texto:
      'A IA entende produto, quantidade, tipo, SIF e gera cada etiqueta no padrão do seu restaurante.',
  },
  {
    passo: '3',
    titulo: 'Confira e ajuste',
    texto:
      'Veja a pré-visualização das etiquetas e monte a fila de impressão — alterne quantidades sem digitar de novo.',
  },
  {
    passo: '4',
    titulo: 'Imprima',
    texto:
      'Um toque destrava a impressão por Bluetooth na sua etiquetadora. Tudo registrado no histórico com o responsável.',
  },
]

const baseRecursos = [
  'Impressora de etiquetas inclusa',
  'App completo de etiquetas',
  'Reconhecimento de voz',
  'IA que entende o pedido',
  'Impressão por Bluetooth',
  'Histórico de impressões',
  'Selo de conformidade',
]

const planos = [
  {
    nome: 'Essencial',
    destaque: false,
    preco: 'R$ 500',
    periodo: '/mês',
    descricao: 'Impressora de etiquetas inclusa no valor',
    recursos: ['1.000 impressões por mês inclusas', ...baseRecursos],
    cta: 'Começar agora',
    wa: 'Quero começar com o plano Essencial (R$ 500/mês, 1.000 impressões, impressora inclusa).',
  },
  {
    nome: 'Profissional',
    destaque: false,
    preco: 'R$ 550',
    periodo: '/mês',
    descricao: 'Impressora de etiquetas inclusa no valor',
    recursos: ['2.000 impressões por mês inclusas', ...baseRecursos],
    cta: 'Começar agora',
    wa: 'Quero começar com o plano Profissional (R$ 550/mês, 2.000 impressões, impressora inclusa).',
  },
  {
    nome: 'Premium',
    destaque: false,
    preco: 'R$ 620',
    periodo: '/mês',
    descricao: 'Impressora de etiquetas inclusa no valor',
    recursos: ['3.000 impressões por mês inclusas', ...baseRecursos],
    cta: 'Começar agora',
    wa: 'Quero começar com o plano Premium (R$ 620/mês, 3.000 impressões, impressora inclusa).',
  },
]

const faqs = [
  {
    pergunta: 'Preciso de equipamento especial para usar?',
    resposta:
      'Não. A KendryIA funciona em navegador (Android e PC) e pelo app Bluefy no iPhone. Suporta as etiquetadoras térmicas via Bluetooth.',
  },
  {
    pergunta: 'A IA entende o que eu falo ou digito?',
    resposta:
      'Sim. Fale ou digite o pedido do jeito que quiser e a IA gera as etiquetas prontas, padronizadas e com todos os campos certos — sem digitar campo por campo.',
  },
  {
    pergunta: 'A etiqueta atende às regras de rotulagem?',
    resposta:
      'Sim. O sistema gera produto, tipo de conservação, código SIF quando informado e validade calculada automaticamente, no padrão exigido pelos órgãos de vigilância sanitária.',
  },
  {
    pergunta: 'A impressora de etiquetas está inclusa?',
    resposta:
      'Sim. A impressora térmica de etiquetas já está inclusa no valor do plano — você não paga nada separado por ela.',
  },
  {
    pergunta: 'Quantas etiquetas tenho por mês?',
    resposta:
      'Depende do plano escolhido: 1.000, 2.000 ou 3.000 impressões por mês. Se a cota acabar, cada rolo avulso de 1.000 etiquetas custa R$ 80.',
  },
  {
    pergunta: 'Quais as formas de pagamento?',
    resposta: 'Cartão de crédito com cobrança recorrente mensal ou Pix.',
  },
  {
    pergunta: 'Posso testar antes de contratar?',
    resposta: 'Sim! Fale com nossa equipe para agendar uma demonstração ao vivo com o seu cenário.',
  },
]

const WHATSAPP = 'https://wa.me/5511994574964'

const orcamentoBtn = {
  label: 'Solicitar orçamento no WhatsApp',
  href: WHATSAPP,
}

export default function Landing() {
  const [faqOpen, setFaqOpen] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <div className={styles.page}>
      {/* NAVBAR */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.logo} onClick={closeMobile}>
            <img src={logo} alt="Logo KendryIA" className={styles.logoImg} width={36} height={36} />
            <span className={styles.logoText}>
              Kendry<span className={styles.logoAccent}>IA</span>
            </span>
          </a>

          <nav className={styles.nav}>
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <a href={orcamentoBtn.href} className={styles.ctaSmall}>
              {orcamentoBtn.label}
            </a>
            <button
              type="button"
              className={styles.hamburger}
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Abrir menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className={styles.mobileNav}>
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={styles.mobileLink} onClick={closeMobile}>
                {item.label}
              </a>
            ))}
            <a href={orcamentoBtn.href} className={styles.mobileCta} onClick={closeMobile}>
              {orcamentoBtn.label}
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroBadge}>
          <span className={styles.pulseDot} />
          Reconhecimento de voz + IA aplicada à sua etiquetadora
        </div>
        <h1 className={styles.title}>
          Etiquetas de restaurante{' '}
          <span className={styles.highlight}>falando com a IA</span>
        </h1>
        <p className={styles.subtitle}>
          Diga ou digite o pedido e a KendryIA gera as etiquetas prontas,
          padronizadas e imprime direto na sua etiquetadora por Bluetooth.
          Menos retrabalho, mais conformidade.
        </p>

        <div className={styles.ctaRow}>
          <a href={orcamentoBtn.href} className={styles.cta}>
            Começar agora
          </a>
          <a href="#como-funciona" className={styles.ctaGhost}>
            Ver como funciona
          </a>
        </div>
        <p className={styles.ctaNote}>
          Impressora de etiquetas inclusa no valor · Resposta no mesmo dia útil
        </p>

        <div className={styles.demo}>
          <img src={demo} alt="Demonstração do sistema KendryIA" className={styles.demoImg} />
        </div>
      </section>

      {/* MARCAS */}
      <section className={styles.metrics}>
        <div className={styles.metric}>
          <strong>3×</strong>
          <span>mais rápido que rotulagem por digitação manual</span>
        </div>
        <div className={styles.metric}>
          <strong>0</strong>
          <span>erros de rotulagem por digitação</span>
        </div>
        <div className={styles.metric}>
          <strong>100%</strong>
          <span>padronização na cozinha</span>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Como funciona</h2>
          <p className={styles.sectionSub}>
            Quatro passos entre o pedido e a etiqueta pronta.
          </p>
        </div>

        <div className={styles.steps}>
          {passos.map((s) => (
            <div key={s.passo} className={styles.step}>
              <div className={styles.stepNum}>{s.passo}</div>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Planos</h2>
          <p className={styles.sectionSub}>
            Escolha a quantidade de etiquetas ideal para o seu restaurante.
          </p>
        </div>

        <div className={styles.plans}>
          {planos.map((p) => (
            <div
              key={p.nome}
              className={`${styles.plan} ${p.destaque ? styles.planHighlight : ''}`}
            >
              {p.destaque && <div className={styles.planTag}>Mais vendido</div>}
              <h3>{p.nome}</h3>
              <div className={styles.planPrice}>
                {p.preco}
                <span>{p.periodo}</span>
              </div>
              <p className={styles.planDesc}>{p.descricao}</p>
              <ul>
                {p.recursos.map((r) => (
                  <li key={r}>✓ {r}</li>
                ))}
              </ul>
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent(p.wa)}`}
                className={p.destaque ? styles.cta : styles.ctaGhost}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className={styles.planNote}>
          Está incluso no plano: a impressora de etiquetas.
          <br />
          Acabaram as impressões? Cada rolo avulso de 1.000 etiquetas custa{' '}
          <strong>R$ 80</strong>.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Perguntas frequentes</h2>
        </div>

        <div className={styles.faq}>
          {faqs.map((f, i) => (
            <div key={f.pergunta} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              >
                <span>{f.pergunta}</span>
                <span className={styles.faqIcon}>{faqOpen === i ? '−' : '+'}</span>
              </button>
              {faqOpen === i && (
                <div className={styles.faqAnswer}>{f.resposta}</div>
              )}
            </div>
          ))}
        </div>
      </section>

{/* WHATSAPP FLUTUANTE */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.waFloat}
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M16.04 4C9.4 4 4 9.4 4 16.04c0 2.12.56 4.18 1.6 6L4 28l6.08-1.6a12.3 12.3 0 0 0 5.92 1.6c6.64 0 12.04-5.4 12.04-12.04S22.68 4 16.04 4Zm0 22c-1.72 0-3.4-.46-4.84-1.32l-.36-.2-3.6.96.96-3.52-.24-.36a9.9 9.9 0 0 1-1.52-5.32C6.44 10.3 10.74 6 16.04 6s9.6 4.3 9.6 9.56S21.34 26 16.04 26Zm5.32-7.2c-.28-.16-1.68-.84-1.96-.92-.28-.08-.48-.12-.68.16-.2.28-.78.92-.96 1.12-.16.2-.32.2-.6.04-.28-.16-1.24-.44-2.36-1.44-.88-.8-1.44-1.76-1.6-2.04-.16-.28-.04-.44.12-.6.16-.12.28-.32.4-.48.12-.16.16-.28.24-.44.08-.16.04-.32-.04-.44-.08-.16-.68-1.72-.92-2.32-.24-.6-.48-.52-.68-.52h-.56c-.2 0-.52.08-.8.36-.28.28-1.04 1.04-1.04 2.48s1.08 2.84 1.24 3.04c.16.16 2.08 3.2 5.08 4.52.72.32 1.24.48 1.68.64.72.2 1.36.16 1.88.08.56-.08 1.68-.68 1.92-1.36.24-.68.24-1.24.16-1.36-.08-.12-.28-.16-.56-.32Z" />
        </svg>
      </a>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <div className={styles.footerLogo}>
              <img src={logo} alt="Logo KendryIA" className={styles.logoImgFooter} width={30} height={30} />
              <span className={styles.logoText}>
                Kendry<span className={styles.logoAccent}>IA</span>
              </span>
            </div>
            <p className={styles.footerTagline}>
              Etiquetas inteligentes para restaurantes e indústrias.
            </p>
          </div>

          <div className={styles.footerCols}>
            <div>
              <strong>Produto</strong>
              <a href="#como-funciona">Como funciona</a>
              <a href="#planos">Planos</a>
            </div>
            <div>
              <strong>Contato</strong>
              <a href={WHATSAPP}>+55 11 99457-4964</a>
              <a href="#faq">Perguntas frequentes</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © {new Date().getFullYear()} KendryIA. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
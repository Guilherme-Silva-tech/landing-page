import { useState } from 'react'
import styles from './Landing.module.css'
import logo from '../../assets/logo.jpg'

const nav = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'Perguntas', href: '#faq' },
]

const recursos = [
  {
    icon: '🎤',
    titulo: 'Comando por voz',
    texto:
      'Diga o que precisa e pronto: "15 etiquetas de frango congelado SIF 234". A IA entende o pedido na hora — sem digitar nada.',
  },
  {
    icon: '🤖',
    titulo: 'IA via n8n + OpenAI',
    texto:
      'Um agente de IA interpreta cada pedido livre de forma inteligente e devolve as etiquetas prontas, padronizadas e com todos os campos certos.',
  },
  {
    icon: '🖨️',
    titulo: 'Impressão direta por Bluetooth',
    texto:
      'Conecte suas impressoras térmicas de etiqueta (Niimbot e Coibeu) e imprima direto do celular ou do computador — sem cabos, sem configuração.',
  },
  {
    icon: '🏷️',
    titulo: 'Etiquetas prontas para a legislação',
    texto:
      'Produto, tipo (congelado/resfriado/seco), código SIF e validade calculada automaticamente. Controle sanitário em dia, sem retrabalho.',
  },
  {
    icon: '🔁',
    titulo: 'Fila inteligente de impressão',
    texto:
      'Acumule vários pedidos e imprima todos de um toque só. Ajuste quantidades com + e −, veja tudo antes de enviar para a impressora.',
  },
  {
    icon: '👨‍🍳',
    titulo: 'Gestão de equipe e acesso',
    texto:
      'Crie funcionários, defina permissões por papel e acompanhe o histórico de impressões de cada responsável. Controle total do seu restaurante.',
  },
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
      'O agente no n8n entende produto, quantidade, tipo, SIF e gera cada etiqueta no padrão do seu restaurante.',
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

const planos = [
  {
    nome: 'Único',
    destaque: false,
    preco: 'R$ 97',
    periodo: '/mês',
    descricao: 'Para o seu restaurante com 1 operação',
    recursos: [
      'App completo de etiquetas',
      'Reconhecimento de voz',
      'IA via n8n (OpenAI)',
      'Impressão Niimbot e Coibeu',
      'Histórico de impressões',
      'Selo de conformidade',
    ],
    cta: 'Começar agora',
  },
  {
    nome: 'Rede / Multi-unidades',
    destaque: true,
    preco: 'Sob consulta',
    periodo: '',
    descricao: 'Para grupos, franquias e redes de restaurantes',
    recursos: [
      'Tudo do plano único',
      'Múltiplos restaurantes',
      'Painel administrativo central',
      'Gestão de funcionários por unidade',
      'Relatórios e exportação',
      'Suporte prioritário',
    ],
    cta: 'Falar com vendas',
  },
]

const faqs = [
  {
    pergunta: 'Preciso de equipamento especial para usar?',
    resposta:
      'Não. A KendryiaIA funciona em navegador (Android e PC) e pelo app Bluefy no iPhone. Suporta as etiquetadoras térmicas Niimbot e Coibeu via Bluetooth.',
  },
  {
    pergunta: 'Como funciona a IA?',
    resposta:
      'Um agente de IA hospedado no n8n interpreta o pedido falado ou digitado e devolve as etiquetas estruturadas. O app ainda tem fallback local: se a IA estiver fora, a interpretação continua acontecendo.',
  },
  {
    pergunta: 'A etiqueta atende às regras de rotulagem?',
    resposta:
      'Sim. O sistema gera produto, tipo de conservação, código SIF quando informado e validade calculada automaticamente, no padrão exigido pelos órgãos de vigilância sanitária.',
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

  return (
    <div className={styles.page}>
      {/* NAVBAR */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="Logo KendryaIA" className={styles.logoImg} />
            Kendrya<span className={styles.logoAccent}>IA</span>
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
          </div>
        </div>
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
          Diga ou digite o pedido e a KendryiaIA gera as etiquetas prontas,
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

        <div className={styles.demo}>
          <div className={styles.demoWindow}>
            {/* TOPO DO APP */}
            <div className={styles.demoTop}>
              <div>
                <div className={styles.demoLogo}>KendryaIA</div>
                <div className={styles.demoSub}>Etiquetas inteligentes</div>
              </div>
              <div className={styles.demoTopRight}>
                <span className={styles.demoBell}>🔔</span>
                <span className={styles.demoUserChip}>
                  <span className={styles.demoAvatar}>J</span>
                  João
                </span>
                <span className={styles.demoSair}>Sair</span>
              </div>
            </div>

            {/* ABAS */}
            <div className={styles.demoTabs}>
              <span className={`${styles.demoTab} ${styles.demoTabActive}`}>✨ Gerar</span>
              <span className={styles.demoTab}>👑 Admin</span>
            </div>

            <div className={styles.demoBody}>
              {/* CHAT */}
              <div className={styles.demoChat}>
                <div className={styles.demoEmpty}>
                  <div className={styles.demoEmptyIcon}>🏷️</div>
                  <div className={styles.demoEmptyTitle}>Bem-vindo 👋</div>
                  <div className={styles.demoEmptyText}>
                    Ex: "quero 15 etiquetas de frango congelado sif 234"
                  </div>
                </div>

                <div className={`${styles.msg} ${styles.msgUser}`}>
                  <span className={styles.msgMic}>🎤</span> quero 15 etiquetas de
                  frango congelado sif 234
                </div>
                <div className={`${styles.msg} ${styles.msgBot}`}>
                  ✅ 15 etiqueta(s) gerada(s)
                </div>
              </div>

              {/* ETIQUETA GERADA (igual à da impressora) */}
              <div className={styles.demoResult}>
                <div className={styles.etiqueta}>
                  <div className={styles.etiquetaHeader}>
                    <span className={styles.etiquetaLogo}>KENDRYIA</span>
                    <span className={styles.etiquetaTipoTop}>ETIQUETA</span>
                  </div>
                  <div className={styles.etiquetaProduto}>FRANGO</div>
                  <div className={styles.etiquetaInfo}>
                    <div className={styles.etiquetaRowTop}>
                      <span>
                        <b>PRODUÇÃO:</b> 15/09/2026
                      </span>
                      <span>
                        <b>VALIDADE:</b> 22/09/2026
                      </span>
                    </div>
                    <div className={styles.etiquetaRowBottom}>
                      <span>
                        <b>SIF:</b> 234
                      </span>
                      <span>
                        <b>RESP:</b> João
                      </span>
                    </div>
                  </div>
                  <div className={styles.etiquetaTipos}>
                    <span className={styles.etiquetaTipo}>
                      <span className={styles.etiquetaCheck}>✓</span> CONGELADO
                    </span>
                    <span className={styles.etiquetaTipo}>
                      <span className={styles.etiquetaCheck} /> RESFRIADO
                    </span>
                    <span className={styles.etiquetaTipo}>
                      <span className={styles.etiquetaCheck} /> SECO
                    </span>
                  </div>
                </div>

                <span className={styles.maisEtiquetas}>
                  +14 etiquetas <small>👁️ ver todas</small>
                </span>

                <div className={styles.demoPrintRow}>
                  <button className={styles.demoPrintA}>🖨️ Imprimir IMPRESSORA A</button>
                  <button className={styles.demoPrintB}>🖨️ Imprimir IMPRESSORA B</button>
                </div>
              </div>

              {/* INPUT */}
              <div className={styles.demoInputRow}>
                <span className={styles.demoInput}>Digite ou fale o que precisa...</span>
                <div className={styles.demoInputBtns}>
                  <button className={styles.demoSend}>Enviar</button>
                  <button className={styles.demoVoice}>🎤 Falar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className={styles.metrics}>
        <div className={styles.metric}>
          <strong>3×</strong>
          <span>menos tempo embalando produtos</span>
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

      {/* RECURSOS */}
      <section id="recursos" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Tudo que a sua cozinha precisa</h2>
          <p className={styles.sectionSub}>
            Do pedido falado até o papel preso na embalagem, a KendryiaIA cuida do caminho inteiro.
          </p>
        </div>

        <div className={styles.grid}>
          {recursos.map((r) => (
            <div key={r.titulo} className={styles.card}>
              <div className={styles.cardIcon}>{r.icon}</div>
              <h3>{r.titulo}</h3>
              <p>{r.texto}</p>
            </div>
          ))}
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

        <div className={styles.flow}>
          <div className={styles.flowItem}>
            <span>🗣️</span>
            <strong>Você fala</strong>
          </div>
          <div className={styles.flowArrow}>→</div>
          <div className={styles.flowItem}>
            <span>🧠</span>
            <strong>Agente IA (n8n)</strong>
          </div>
          <div className={styles.flowArrow}>→</div>
          <div className={styles.flowItem}>
            <span>🏷️</span>
            <strong>Etiquetas prontas</strong>
          </div>
          <div className={styles.flowArrow}>→</div>
          <div className={styles.flowItem}>
            <span>🖨️</span>
            <strong>Impressão Bluetooth</strong>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Planos</h2>
          <p className={styles.sectionSub}>
            Comece por uma unidade ou leve a IA para toda a sua rede.
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
              <a href={orcamentoBtn.href} className={p.destaque ? styles.cta : styles.ctaGhost}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
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

      {/* CTA FINAL */}
      <section className={styles.finalCta}>
        <div className={styles.finalGlow} />
        <h2>Pronto para modernizar a rotulagem do seu restaurante?</h2>
        <p>Agende uma demonstração e veja a etiqueta saindo em menos de um minuto.</p>
        <a href={orcamentoBtn.href} className={styles.cta}>
          {orcamentoBtn.label}
        </a>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <div className={styles.footerLogo}>
              <img src={logo} alt="Logo KendryaIA" className={styles.logoImgFooter} />
              Kendrya<span className={styles.logoAccent}>IA</span>
            </div>
            <p className={styles.footerTagline}>
              Etiquetas inteligentes para restaurantes e indústrias.
            </p>
          </div>

          <div className={styles.footerCols}>
            <div>
              <strong>Produto</strong>
              <a href="#recursos">Recursos</a>
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
          © {new Date().getFullYear()} KendryaIA. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
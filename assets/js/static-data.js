(function () {
  const cache = {
  "data/connected_fleet_lab.json": {
    "meta": {
      "schemaVersion": "1.0.0",
      "moduleId": "connected-fleet-lab",
      "dataStatus": "demo_assumptions",
      "sourceBasis": "Portfolio proposal connected-fleet and service-planning narrative converted into a static product-planning prototype.",
      "publicBoundary": {
        "zh": "本車聯網實驗室僅使用 demo 假設，不收集、不傳送、不分析任何真實車輛、駕駛、客戶或營運資料。",
        "en": "This Connected Fleet Lab uses demo assumptions only. It does not collect, transmit, or analyze any real vehicle, driver, customer, or operational data.",
        "ja": "このコネクテッドフリートラボはデモ仮定のみを使用します。実車、運転者、顧客、運用データを収集、送信、分析しません。"
      }
    },
    "flowSteps": [
      {
        "id": "vehicle_signals",
        "glossaryTerms": [
          "fms",
          "soh"
        ],
        "label": {
          "zh": "車輛訊號",
          "en": "Vehicle signals",
          "ja": "車両信号"
        },
        "description": {
          "zh": "車況、里程、故障碼、能源、駕駛事件與保養紀錄。",
          "en": "Vehicle status, mileage, fault codes, energy, driving events, and maintenance records.",
          "ja": "車両状態、走行距離、故障コード、エネルギー、運転イベント、整備記録。"
        }
      },
      {
        "id": "data_cleaning",
        "glossaryTerms": [
          "kpi"
        ],
        "label": {
          "zh": "資料整理",
          "en": "Data cleaning",
          "ja": "データ整理"
        },
        "description": {
          "zh": "定義欄位、缺漏、品質、同意與可用 KPI。",
          "en": "Define fields, missingness, quality, consent, and usable KPIs.",
          "ja": "項目、欠損、品質、同意、利用可能 KPI を定義します。"
        }
      },
      {
        "id": "analysis",
        "glossaryTerms": [
          "ai-governance",
          "fms"
        ],
        "label": {
          "zh": "分析判讀",
          "en": "Analysis",
          "ja": "分析判断"
        },
        "description": {
          "zh": "用規則或 AI 輔助找出保養、效率、風險與教育線索。",
          "en": "Use rules or AI assistance to find maintenance, efficiency, risk, and education signals.",
          "ja": "ルールまたは AI 支援で、整備、効率、リスク、教育の手がかりを見つけます。"
        }
      },
      {
        "id": "service_action",
        "glossaryTerms": [
          "ota",
          "soh"
        ],
        "label": {
          "zh": "服務行動",
          "en": "Service action",
          "ja": "サービス行動"
        },
        "description": {
          "zh": "排程、零件、檢修、OTA 通知或人工覆核。",
          "en": "Scheduling, parts, inspection, OTA notification, or human review.",
          "ja": "予約、部品、点検、OTA 通知、人による確認。"
        }
      },
      {
        "id": "dealer_support",
        "glossaryTerms": [
          "dealer"
        ],
        "label": {
          "zh": "通路支援",
          "en": "Dealer support",
          "ja": "販売店支援"
        },
        "description": {
          "zh": "把數據轉成服務顧問、維修與客戶溝通流程。",
          "en": "Translate data into service-advisor, repair, and customer communication workflows.",
          "ja": "データをサービスアドバイザー、整備、顧客コミュニケーションへ変換します。"
        }
      },
      {
        "id": "customer_report",
        "glossaryTerms": [
          "esg",
          "tco",
          "carbon-accounting"
        ],
        "label": {
          "zh": "客戶報告",
          "en": "Customer report",
          "ja": "顧客レポート"
        },
        "description": {
          "zh": "輸出營運、成本、妥善率、碳追蹤與改善建議。",
          "en": "Output operations, cost, uptime, carbon tracking, and improvement recommendations.",
          "ja": "運用、コスト、稼働率、炭素追跡、改善提案を出力します。"
        }
      }
    ],
    "modules": [
      {
        "id": "remote_diagnostics",
        "category": "service_readiness",
        "maturity": "near_term_education",
        "glossaryTerms": [
          "fms",
          "ota",
          "kpi"
        ],
        "name": {
          "zh": "遠端診斷與故障碼整理",
          "en": "Remote diagnostics and fault-code triage",
          "ja": "遠隔診断と故障コード整理"
        },
        "summary": {
          "zh": "把故障碼、警示與車況資料轉成服務優先順序與通路溝通線索。",
          "en": "Turns fault codes, alerts, and vehicle status into service priorities and dealer communication cues.",
          "ja": "故障コード、警報、車両状態をサービス優先度と販売店コミュニケーションの手がかりへ変換します。"
        },
        "dataInputs": {
          "zh": [
            "故障碼",
            "車輛里程",
            "警示時間",
            "維修履歷",
            "OTA 狀態"
          ],
          "en": [
            "Fault codes",
            "Vehicle mileage",
            "Alert timing",
            "Repair history",
            "OTA status"
          ],
          "ja": [
            "故障コード",
            "走行距離",
            "警報時刻",
            "整備履歴",
            "OTA 状態"
          ]
        },
        "customerValue": {
          "zh": "減少客戶描述問題的負擔，讓服務端更快判斷是否需要進廠、零件或人工覆核。",
          "en": "Reduces the burden of describing issues and helps service teams decide whether workshop visit, parts, or human review is needed.",
          "ja": "顧客が問題を説明する負担を減らし、入庫、部品、人による確認が必要かを判断しやすくします。"
        },
        "planningValue": {
          "zh": "可把硬體售後延伸成服務 readiness、診斷流程與 KPI 定義。",
          "en": "Extends hardware aftersales into service readiness, diagnostic workflow, and KPI definition.",
          "ja": "ハードウェアのアフターサービスを、サービス準備、診断フロー、KPI 定義へ広げます。"
        },
        "serviceRequirements": {
          "zh": [
            "故障碼對應表",
            "通路回應 SLA",
            "維修紀錄回填",
            "客戶同意與資料保存規則"
          ],
          "en": [
            "Fault-code mapping",
            "Dealer response SLA",
            "Repair-record feedback",
            "Customer consent and retention rules"
          ],
          "ja": [
            "故障コード対応表",
            "販売店対応 SLA",
            "整備記録の戻し込み",
            "顧客同意と保存ルール"
          ]
        },
        "riskNotes": {
          "zh": [
            "不能把遠端警示當成正式診斷結論。",
            "資料不同步或欄位未定義會造成誤判。"
          ],
          "en": [
            "Remote alerts must not be treated as final diagnostic conclusions.",
            "Out-of-sync data or undefined fields can cause wrong triage."
          ],
          "ja": [
            "遠隔警報を正式な診断結論として扱ってはいけません。",
            "データ同期不足や項目未定義は誤判断につながります。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "如何解釋故障碼與客戶症狀的差異",
            "如何把遠端資料轉成進廠前準備",
            "如何說明資料不是即時監控"
          ],
          "en": [
            "Explain the difference between fault codes and customer symptoms",
            "Turn remote data into pre-workshop preparation",
            "Explain that data is not live surveillance"
          ],
          "ja": [
            "故障コードと顧客症状の違いを説明",
            "遠隔データを入庫前準備へ変換",
            "データはライブ監視ではないと説明"
          ]
        },
        "reportOutputs": {
          "zh": [
            "診斷摘要",
            "服務優先度",
            "需覆核項目"
          ],
          "en": [
            "Diagnostic summary",
            "Service priority",
            "Items needing review"
          ],
          "ja": [
            "診断要約",
            "サービス優先度",
            "確認が必要な項目"
          ]
        },
        "riskScore": 62
      },
      {
        "id": "predictive_maintenance",
        "category": "uptime_support",
        "maturity": "medium_term_poc",
        "glossaryTerms": [
          "fms",
          "ai-governance",
          "soh",
          "poc"
        ],
        "name": {
          "zh": "預測維修與妥善率支援",
          "en": "Predictive maintenance and uptime support",
          "ja": "予知保全と稼働率支援"
        },
        "summary": {
          "zh": "用維修履歷、警示、零件壽命與營運強度，建立需人工覆核的保養提醒。",
          "en": "Uses repair history, alerts, parts life, and operating intensity to build human-reviewed maintenance reminders.",
          "ja": "整備履歴、警報、部品寿命、運用強度から、人が確認する保全リマインダーを作ります。"
        },
        "dataInputs": {
          "zh": [
            "維修履歷",
            "零件更換週期",
            "車輛里程",
            "負載強度",
            "警示事件"
          ],
          "en": [
            "Repair history",
            "Parts replacement cycle",
            "Mileage",
            "Load intensity",
            "Alert events"
          ],
          "ja": [
            "整備履歴",
            "部品交換周期",
            "走行距離",
            "負荷強度",
            "警報イベント"
          ]
        },
        "customerValue": {
          "zh": "協助客戶把停工風險提前討論，但不保證能預測所有故障。",
          "en": "Helps customers discuss downtime risk earlier, without guaranteeing every failure can be predicted.",
          "ja": "停止リスクを早めに議論できますが、すべての故障予測を保証するものではありません。"
        },
        "planningValue": {
          "zh": "形成服務產品、保養方案、零件備料與車隊顧問服務的基礎。",
          "en": "Creates a base for service products, maintenance plans, parts stocking, and fleet advisory services.",
          "ja": "サービス商品、保守プラン、部品在庫、フリート助言サービスの土台になります。"
        },
        "serviceRequirements": {
          "zh": [
            "資料品質檢核",
            "模型或規則可解釋性",
            "人工覆核流程",
            "零件與工時準備"
          ],
          "en": [
            "Data-quality checks",
            "Explainable model or rules",
            "Human review workflow",
            "Parts and labor preparation"
          ],
          "ja": [
            "データ品質確認",
            "説明可能なモデルまたはルール",
            "人による確認フロー",
            "部品と工数の準備"
          ]
        },
        "riskNotes": {
          "zh": [
            "AI 或規則輸出不得當成保固或故障必然結論。",
            "資料偏差可能讓高風險車輛被低估。"
          ],
          "en": [
            "AI or rule output must not be treated as warranty or certain failure conclusions.",
            "Data bias may understate high-risk vehicles."
          ],
          "ja": [
            "AI やルール出力を保証や故障確定結論として扱いません。",
            "データ偏りにより高リスク車両が過小評価される可能性があります。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "把提醒說成保養討論起點",
            "說明模型限制與人工覆核",
            "建立客戶停工成本訪談"
          ],
          "en": [
            "Frame reminders as maintenance discussion starters",
            "Explain model limits and human review",
            "Build downtime-cost interview scripts"
          ],
          "ja": [
            "リマインダーを整備議論の起点として説明",
            "モデル制約と人による確認を説明",
            "停止コストのヒアリングを作成"
          ]
        },
        "reportOutputs": {
          "zh": [
            "保養提醒",
            "妥善率風險",
            "需備料項目"
          ],
          "en": [
            "Maintenance reminders",
            "Uptime risk",
            "Parts to prepare"
          ],
          "ja": [
            "保全リマインダー",
            "稼働率リスク",
            "準備部品"
          ]
        },
        "riskScore": 78
      },
      {
        "id": "route_optimization",
        "category": "operating_efficiency",
        "maturity": "medium_term_poc",
        "glossaryTerms": [
          "fms",
          "kpi",
          "tco"
        ],
        "name": {
          "zh": "路線最佳化與能源效率",
          "en": "Route optimization and energy efficiency",
          "ja": "ルート最適化とエネルギー効率"
        },
        "summary": {
          "zh": "把里程、停等、載重、能耗與任務時窗轉成路線改善建議。",
          "en": "Turns mileage, stops, payload, energy use, and delivery windows into route-improvement suggestions.",
          "ja": "走行距離、停止、積載、エネルギー使用、配送時間帯をルート改善提案に変換します。"
        },
        "dataInputs": {
          "zh": [
            "路線紀錄",
            "停等時間",
            "載重",
            "能耗",
            "配送時窗"
          ],
          "en": [
            "Route records",
            "Idle or stop time",
            "Payload",
            "Energy use",
            "Delivery windows"
          ],
          "ja": [
            "ルート記録",
            "停止時間",
            "積載",
            "エネルギー使用",
            "配送時間帯"
          ]
        },
        "customerValue": {
          "zh": "協助客戶討論油耗、電耗、準時率與駕駛負擔，但需客戶作業資料驗證。",
          "en": "Helps discuss fuel or energy use, punctuality, and driver burden, but requires customer operation data validation.",
          "ja": "燃料・電力使用、定時性、運転者負担を議論できますが、顧客運用データの検証が必要です。"
        },
        "planningValue": {
          "zh": "可連到 BEV 適用路線、TCO 交叉點、車隊教育與營運報告。",
          "en": "Connects to BEV route fit, TCO crossover, fleet education, and operating reports.",
          "ja": "BEV 適合ルート、TCO クロスオーバー、フリート教育、運用レポートにつながります。"
        },
        "serviceRequirements": {
          "zh": [
            "客戶路線資料同意",
            "KPI 定義",
            "例外情境標記",
            "駕駛溝通"
          ],
          "en": [
            "Customer route-data consent",
            "KPI definition",
            "Exception tagging",
            "Driver communication"
          ],
          "ja": [
            "顧客ルートデータ同意",
            "KPI 定義",
            "例外場面タグ",
            "運転者コミュニケーション"
          ]
        },
        "riskNotes": {
          "zh": [
            "不能用 demo 路線建議替代正式排班或客戶營運決策。",
            "忽略臨時任務會讓建議失真。"
          ],
          "en": [
            "Demo route suggestions must not replace formal dispatch or customer operating decisions.",
            "Ignoring ad hoc work can distort recommendations."
          ],
          "ja": [
            "デモルート提案は正式配車や顧客運用判断の代替ではありません。",
            "臨時業務を無視すると提案が歪みます。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "用路線資料解釋 TCO",
            "辨識適合 BEV PoC 的固定路線",
            "說明資料需客戶確認"
          ],
          "en": [
            "Use route data to explain TCO",
            "Identify fixed routes suitable for BEV PoCs",
            "Explain customer validation requirement"
          ],
          "ja": [
            "ルートデータで TCO を説明",
            "BEV PoC に向く固定ルートを特定",
            "顧客確認が必要と説明"
          ]
        },
        "reportOutputs": {
          "zh": [
            "路線效率",
            "準時率線索",
            "能源改善方向"
          ],
          "en": [
            "Route efficiency",
            "Punctuality cues",
            "Energy improvement direction"
          ],
          "ja": [
            "ルート効率",
            "定時性の手がかり",
            "エネルギー改善方向"
          ]
        },
        "riskScore": 64
      },
      {
        "id": "driver_behavior_scoring",
        "category": "safety_governance",
        "maturity": "near_term_education",
        "glossaryTerms": [
          "fms",
          "ai-governance",
          "kpi"
        ],
        "name": {
          "zh": "駕駛行為評分與教育回饋",
          "en": "Driver behavior scoring and coaching feedback",
          "ja": "運転行動スコアと教育フィードバック"
        },
        "summary": {
          "zh": "整理急煞、急加速、怠速、超速警示與安全事件，支援教育而非單向懲處。",
          "en": "Summarizes harsh braking, acceleration, idling, speed alerts, and safety events to support coaching rather than one-way discipline.",
          "ja": "急制動、急加速、アイドリング、速度警報、安全イベントを整理し、一方的な処分ではなく教育を支援します。"
        },
        "dataInputs": {
          "zh": [
            "急煞事件",
            "急加速",
            "怠速",
            "超速提醒",
            "安全警示"
          ],
          "en": [
            "Harsh braking",
            "Harsh acceleration",
            "Idling",
            "Speed reminders",
            "Safety alerts"
          ],
          "ja": [
            "急制動",
            "急加速",
            "アイドリング",
            "速度リマインダー",
            "安全警報"
          ]
        },
        "customerValue": {
          "zh": "建立駕駛教育與營運安全對話，但必須處理隱私、同意與情境覆核。",
          "en": "Creates driver coaching and safety conversation, but must handle privacy, consent, and context review.",
          "ja": "運転者教育と安全対話を作りますが、プライバシー、同意、文脈確認が必要です。"
        },
        "planningValue": {
          "zh": "可形成安全教育服務、KPI 報告與通路顧問材料。",
          "en": "Can become safety-coaching service, KPI reports, and dealer advisory material.",
          "ja": "安全教育サービス、KPI レポート、販売店助言資料になります。"
        },
        "serviceRequirements": {
          "zh": [
            "資料同意",
            "指標定義",
            "人工覆核",
            "駕駛申訴與修正機制"
          ],
          "en": [
            "Data consent",
            "Metric definitions",
            "Human review",
            "Driver dispute and correction process"
          ],
          "ja": [
            "データ同意",
            "指標定義",
            "人による確認",
            "運転者の異議・修正プロセス"
          ]
        },
        "riskNotes": {
          "zh": [
            "不可把分數當成唯一績效或懲處依據。",
            "AI 評分需有解釋與覆核邊界。"
          ],
          "en": [
            "Scores must not be the sole performance or disciplinary basis.",
            "AI scoring needs explanation and review boundaries."
          ],
          "ja": [
            "スコアを唯一の評価・処分根拠にしません。",
            "AI スコアには説明と確認境界が必要です。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "用改善而非監控語氣溝通",
            "建立資料同意範本",
            "說明分數不是事故責任判斷"
          ],
          "en": [
            "Communicate improvement, not surveillance",
            "Create data-consent templates",
            "Explain scores are not accident-liability judgments"
          ],
          "ja": [
            "監視ではなく改善として説明",
            "データ同意テンプレートを作成",
            "スコアは事故責任判断ではないと説明"
          ]
        },
        "reportOutputs": {
          "zh": [
            "安全教育線索",
            "駕駛回饋",
            "KPI 趨勢"
          ],
          "en": [
            "Safety coaching cues",
            "Driver feedback",
            "KPI trends"
          ],
          "ja": [
            "安全教育の手がかり",
            "運転者フィードバック",
            "KPI 推移"
          ]
        },
        "riskScore": 84
      },
      {
        "id": "fleet_utilization",
        "category": "asset_efficiency",
        "maturity": "near_term_education",
        "glossaryTerms": [
          "fms",
          "kpi",
          "tco"
        ],
        "name": {
          "zh": "車隊利用率與資產效率",
          "en": "Fleet utilization and asset efficiency",
          "ja": "フリート稼働率と資産効率"
        },
        "summary": {
          "zh": "把車輛出勤、閒置、里程、任務與維修停車轉成資產使用分析。",
          "en": "Turns vehicle activity, idle time, mileage, tasks, and maintenance downtime into asset-use analysis.",
          "ja": "車両稼働、待機、走行距離、業務、整備停止を資産利用分析へ変換します。"
        },
        "dataInputs": {
          "zh": [
            "出勤紀錄",
            "閒置時間",
            "里程",
            "任務數",
            "維修停車"
          ],
          "en": [
            "Activity records",
            "Idle time",
            "Mileage",
            "Task count",
            "Maintenance downtime"
          ],
          "ja": [
            "稼働記録",
            "待機時間",
            "走行距離",
            "業務件数",
            "整備停止"
          ]
        },
        "customerValue": {
          "zh": "協助客戶判斷車輛是否過多、過少或配置不均。",
          "en": "Helps customers discuss whether vehicles are too many, too few, or unevenly allocated.",
          "ja": "車両が多すぎる、少なすぎる、配置が偏っているかを議論できます。"
        },
        "planningValue": {
          "zh": "支援新車提案、租賃方案、車型配置與售後服務優先順序。",
          "en": "Supports new-vehicle proposals, leasing plans, model allocation, and aftersales prioritization.",
          "ja": "新車提案、リースプラン、車型配置、アフターサービス優先度を支援します。"
        },
        "serviceRequirements": {
          "zh": [
            "任務定義",
            "閒置規則",
            "維修停車分類",
            "客戶營運脈絡"
          ],
          "en": [
            "Task definitions",
            "Idle rules",
            "Maintenance-downtime classification",
            "Customer operating context"
          ],
          "ja": [
            "業務定義",
            "待機ルール",
            "整備停止分類",
            "顧客運用文脈"
          ]
        },
        "riskNotes": {
          "zh": [
            "利用率低不必然代表車輛多餘，可能是尖峰備援或特殊任務。",
            "需避免用單一 KPI 下結論。"
          ],
          "en": [
            "Low utilization does not necessarily mean excess vehicles; it may reflect peak backup or special tasks.",
            "Avoid conclusions from one KPI only."
          ],
          "ja": [
            "低稼働率は必ずしも余剰車両を意味せず、ピーク時予備や特殊業務の可能性があります。",
            "単一 KPI だけで結論を出さないようにします。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "用情境解釋 KPI",
            "把利用率連到車型配置",
            "提醒需客戶營運脈絡"
          ],
          "en": [
            "Explain KPIs by scenario",
            "Connect utilization to model allocation",
            "Remind teams to verify operating context"
          ],
          "ja": [
            "場面別に KPI を説明",
            "稼働率を車型配置につなぐ",
            "運用文脈の確認を促す"
          ]
        },
        "reportOutputs": {
          "zh": [
            "利用率摘要",
            "閒置原因",
            "車型配置建議"
          ],
          "en": [
            "Utilization summary",
            "Idle reasons",
            "Model-allocation suggestions"
          ],
          "ja": [
            "稼働率要約",
            "待機理由",
            "車型配置提案"
          ]
        },
        "riskScore": 52
      },
      {
        "id": "service_scheduling",
        "category": "service_readiness",
        "maturity": "near_term_education",
        "glossaryTerms": [
          "fms",
          "kpi",
          "dealer"
        ],
        "name": {
          "zh": "服務排程與通路妥善率支援",
          "en": "Service scheduling and dealer uptime support",
          "ja": "サービス予約と販売店稼働率支援"
        },
        "summary": {
          "zh": "把保養週期、車輛可用時窗、通路工位與客戶停工敏感度轉成排程建議。",
          "en": "Turns maintenance cycles, vehicle availability windows, dealer capacity, and downtime sensitivity into scheduling suggestions.",
          "ja": "保守周期、車両利用可能時間、販売店工位、停止感度を予約提案へ変換します。"
        },
        "dataInputs": {
          "zh": [
            "保養週期",
            "車輛可用時窗",
            "通路工位",
            "停工敏感度",
            "零件狀態"
          ],
          "en": [
            "Maintenance cycle",
            "Vehicle availability windows",
            "Dealer bay capacity",
            "Downtime sensitivity",
            "Parts status"
          ],
          "ja": [
            "保守周期",
            "車両利用可能時間",
            "販売店工位",
            "停止感度",
            "部品状態"
          ]
        },
        "customerValue": {
          "zh": "降低臨時進廠與等待不確定性，讓保養與營運排程更容易協調。",
          "en": "Reduces uncertainty around unscheduled workshop visits and waiting time, making maintenance and operations easier to coordinate.",
          "ja": "突発入庫と待ち時間の不確実性を下げ、整備と運用計画を調整しやすくします。"
        },
        "planningValue": {
          "zh": "讓產品規劃連到售後服務能力、通路負荷與客戶妥善率。",
          "en": "Connects product planning to aftersales capability, dealer load, and customer uptime.",
          "ja": "商品企画をアフターサービス能力、販売店負荷、顧客稼働率につなげます。"
        },
        "serviceRequirements": {
          "zh": [
            "通路工位資料",
            "零件到貨狀態",
            "客戶停車時窗",
            "預約與改期規則"
          ],
          "en": [
            "Dealer bay data",
            "Parts arrival status",
            "Customer downtime windows",
            "Booking and rescheduling rules"
          ],
          "ja": [
            "販売店工位データ",
            "部品到着状態",
            "顧客停止時間帯",
            "予約・変更ルール"
          ]
        },
        "riskNotes": {
          "zh": [
            "若通路資料不透明，排程建議可能失準。",
            "不能承諾所有進廠都可零等待。"
          ],
          "en": [
            "If dealer capacity data is not transparent, scheduling suggestions may be inaccurate.",
            "Do not promise zero waiting for every workshop visit."
          ],
          "ja": [
            "販売店容量データが透明でないと予約提案が不正確になります。",
            "すべての入庫で待ち時間ゼロを約束しません。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "說明預約建議不是保證",
            "建立客戶停車時窗訪談",
            "把零件與工位資料回填"
          ],
          "en": [
            "Explain scheduling suggestions are not guarantees",
            "Interview customers on downtime windows",
            "Feed back parts and bay data"
          ],
          "ja": [
            "予約提案は保証ではないと説明",
            "顧客停止時間帯をヒアリング",
            "部品と工位データを戻し込む"
          ]
        },
        "reportOutputs": {
          "zh": [
            "排程建議",
            "通路負荷",
            "停工風險"
          ],
          "en": [
            "Scheduling suggestions",
            "Dealer load",
            "Downtime risk"
          ],
          "ja": [
            "予約提案",
            "販売店負荷",
            "停止リスク"
          ]
        },
        "riskScore": 58
      },
      {
        "id": "parts_prediction",
        "category": "parts_readiness",
        "maturity": "medium_term_poc",
        "glossaryTerms": [
          "fms",
          "ai-governance",
          "kpi"
        ],
        "name": {
          "zh": "零件需求預測與備料企劃",
          "en": "Parts-demand prediction and stocking planning",
          "ja": "部品需要予測と在庫企画"
        },
        "summary": {
          "zh": "用車齡、里程、維修履歷、區域使用與季節性，支援零件備料與通路服務 readiness。",
          "en": "Uses age, mileage, repair history, regional use, and seasonality to support parts stocking and dealer service readiness.",
          "ja": "車齢、走行距離、整備履歴、地域利用、季節性から部品在庫と販売店サービス準備を支援します。"
        },
        "dataInputs": {
          "zh": [
            "車齡",
            "里程",
            "維修履歷",
            "區域使用",
            "季節性"
          ],
          "en": [
            "Vehicle age",
            "Mileage",
            "Repair history",
            "Regional use",
            "Seasonality"
          ],
          "ja": [
            "車齢",
            "走行距離",
            "整備履歴",
            "地域利用",
            "季節性"
          ]
        },
        "customerValue": {
          "zh": "可降低缺料等待，但需通路庫存、供應與需求資料同步。",
          "en": "Can reduce waiting caused by parts shortages, but needs dealer inventory, supply, and demand data alignment.",
          "ja": "部品不足による待ち時間を下げられますが、販売店在庫、供給、需要データの整合が必要です。"
        },
        "planningValue": {
          "zh": "支援售後收益、服務體驗、車型生命週期與區域通路策略。",
          "en": "Supports aftersales revenue, service experience, model lifecycle, and regional dealer strategy.",
          "ja": "アフター収益、サービス体験、車型ライフサイクル、地域販売店戦略を支援します。"
        },
        "serviceRequirements": {
          "zh": [
            "庫存資料",
            "供應週期",
            "維修工單",
            "模型覆核",
            "缺料回報"
          ],
          "en": [
            "Inventory data",
            "Supply lead time",
            "Repair orders",
            "Model review",
            "Shortage feedback"
          ],
          "ja": [
            "在庫データ",
            "供給リードタイム",
            "整備工単",
            "モデル確認",
            "欠品フィードバック"
          ]
        },
        "riskNotes": {
          "zh": [
            "預測不可當成採購保證。",
            "需求突變、召修或供應異常需人工調整。"
          ],
          "en": [
            "Prediction must not be treated as a procurement guarantee.",
            "Demand shifts, recalls, or supply disruptions need human adjustment."
          ],
          "ja": [
            "予測を調達保証として扱いません。",
            "需要変動、リコール、供給異常は人による調整が必要です。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "說明預測與實際需求差異",
            "建立缺料回報流程",
            "把模型結果納入人工覆核"
          ],
          "en": [
            "Explain prediction versus actual demand",
            "Create shortage feedback flow",
            "Put model results into human review"
          ],
          "ja": [
            "予測と実需要の差を説明",
            "欠品フィードバックを作成",
            "モデル結果を人の確認へ入れる"
          ]
        },
        "reportOutputs": {
          "zh": [
            "備料建議",
            "缺料風險",
            "區域需求線索"
          ],
          "en": [
            "Stocking suggestions",
            "Shortage risk",
            "Regional demand signals"
          ],
          "ja": [
            "在庫提案",
            "欠品リスク",
            "地域需要の手がかり"
          ]
        },
        "riskScore": 70
      },
      {
        "id": "carbon_tracking",
        "category": "esg_reporting",
        "maturity": "medium_term_poc",
        "glossaryTerms": [
          "esg",
          "carbon-accounting",
          "fms",
          "v2g"
        ],
        "name": {
          "zh": "碳追蹤與 ESG 營運報告",
          "en": "Carbon tracking and ESG operating reports",
          "ja": "炭素追跡と ESG 運用レポート"
        },
        "summary": {
          "zh": "把里程、油耗/電耗、任務、能源係數與邊界設定轉成 demo 碳追蹤報告。",
          "en": "Turns mileage, fuel or electricity use, tasks, energy factors, and boundary settings into demo carbon-tracking reports.",
          "ja": "走行距離、燃料・電力使用、業務、エネルギー係数、境界設定を demo 炭素追跡レポートへ変換します。"
        },
        "dataInputs": {
          "zh": [
            "里程",
            "油耗/電耗",
            "任務資料",
            "能源係數",
            "盤查邊界"
          ],
          "en": [
            "Mileage",
            "Fuel or electricity use",
            "Task data",
            "Energy factors",
            "Accounting boundary"
          ],
          "ja": [
            "走行距離",
            "燃料・電力使用",
            "業務データ",
            "エネルギー係数",
            "算定境界"
          ]
        },
        "customerValue": {
          "zh": "協助客戶理解營運碳訊號，但不能替代正式 ESG 或法定排放申報。",
          "en": "Helps customers understand operating carbon signals, but cannot replace formal ESG or statutory emissions reporting.",
          "ja": "運用上の炭素シグナル理解を支援しますが、正式な ESG や法定排出報告の代替ではありません。"
        },
        "planningValue": {
          "zh": "連接 BEV、V2G、TCO、ESG 壓力與客戶報告服務。",
          "en": "Connects BEV, V2G, TCO, ESG pressure, and customer reporting services.",
          "ja": "BEV、V2G、TCO、ESG 圧力、顧客レポートサービスをつなぎます。"
        },
        "serviceRequirements": {
          "zh": [
            "邊界定義",
            "活動資料品質",
            "能源係數更新",
            "人工覆核",
            "法規來源確認"
          ],
          "en": [
            "Boundary definition",
            "Activity-data quality",
            "Energy-factor refresh",
            "Human review",
            "Regulatory source checks"
          ],
          "ja": [
            "境界定義",
            "活動データ品質",
            "エネルギー係数更新",
            "人による確認",
            "規制情報確認"
          ]
        },
        "riskNotes": {
          "zh": [
            "Demo 碳數字不可作為正式盤查或法定申報。",
            "係數、邊界與資料來源需標明日期與版本。"
          ],
          "en": [
            "Demo carbon values must not be used as formal accounting or statutory reporting.",
            "Factors, boundaries, and data sources need date and version labels."
          ],
          "ja": [
            "Demo 炭素値を正式算定や法定報告に使ってはいけません。",
            "係数、境界、データソースには日付と版を示す必要があります。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "區分 ESG 訊號與正式盤查",
            "說明活動資料與係數",
            "把碳報告連到能源路線圖"
          ],
          "en": [
            "Separate ESG signals from formal accounting",
            "Explain activity data and factors",
            "Connect carbon reports to the energy roadmap"
          ],
          "ja": [
            "ESG シグナルと正式算定を分ける",
            "活動データと係数を説明",
            "炭素レポートをエネルギーロードマップへ接続"
          ]
        },
        "reportOutputs": {
          "zh": [
            "相對碳訊號",
            "能源使用趨勢",
            "需覆核係數"
          ],
          "en": [
            "Relative carbon signal",
            "Energy-use trend",
            "Factors needing review"
          ],
          "ja": [
            "相対炭素シグナル",
            "エネルギー使用推移",
            "確認が必要な係数"
          ]
        },
        "riskScore": 82
      },
      {
        "id": "customer_operating_reports",
        "category": "customer_success",
        "maturity": "near_term_education",
        "glossaryTerms": [
          "fms",
          "kpi",
          "tco",
          "esg"
        ],
        "name": {
          "zh": "客戶營運報告與顧問化服務",
          "en": "Customer operating reports and advisory service",
          "ja": "顧客運用レポートと助言サービス"
        },
        "summary": {
          "zh": "把妥善率、成本、路線、保養、能源與碳訊號整理成客戶可討論的營運報告。",
          "en": "Packages uptime, cost, routes, maintenance, energy, and carbon signals into customer-facing operating reports.",
          "ja": "稼働率、コスト、ルート、保守、エネルギー、炭素シグナルを顧客向け運用レポートにまとめます。"
        },
        "dataInputs": {
          "zh": [
            "KPI 摘要",
            "服務紀錄",
            "路線資料",
            "能源資料",
            "碳追蹤"
          ],
          "en": [
            "KPI summary",
            "Service records",
            "Route data",
            "Energy data",
            "Carbon tracking"
          ],
          "ja": [
            "KPI 要約",
            "サービス記録",
            "ルートデータ",
            "エネルギーデータ",
            "炭素追跡"
          ]
        },
        "customerValue": {
          "zh": "讓客戶用同一份報告討論車輛、服務、成本、效率與改善行動。",
          "en": "Lets customers discuss vehicles, service, cost, efficiency, and improvement actions from one report.",
          "ja": "顧客が車両、サービス、コスト、効率、改善行動を1つのレポートで議論できます。"
        },
        "planningValue": {
          "zh": "把產品規劃從單車銷售延伸到車隊顧問、續約與服務價值。",
          "en": "Extends product planning from vehicle sales into fleet advisory, renewal, and service value.",
          "ja": "商品企画を車両販売からフリート助言、更新、サービス価値へ広げます。"
        },
        "serviceRequirements": {
          "zh": [
            "報告模板",
            "KPI 定義",
            "資料權限",
            "客戶會議節奏",
            "改善追蹤"
          ],
          "en": [
            "Report template",
            "KPI definitions",
            "Data permissions",
            "Customer meeting cadence",
            "Improvement tracking"
          ],
          "ja": [
            "レポートテンプレート",
            "KPI 定義",
            "データ権限",
            "顧客会議頻度",
            "改善追跡"
          ]
        },
        "riskNotes": {
          "zh": [
            "報告不得暗示收集即時資料。",
            "建議需標示 demo 假設與資料缺口。"
          ],
          "en": [
            "Reports must not imply real-time data collection.",
            "Recommendations need demo-assumption and data-gap labels."
          ],
          "ja": [
            "レポートはリアルタイムデータ収集を示唆してはいけません。",
            "提案には demo 仮定とデータギャップを示します。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "用營運語言解釋 KPI",
            "把報告轉成客戶會議腳本",
            "明確說明資料來源與限制"
          ],
          "en": [
            "Explain KPIs in operating language",
            "Turn reports into customer meeting scripts",
            "Clearly explain data sources and limits"
          ],
          "ja": [
            "KPI を運用言語で説明",
            "レポートを顧客会議台本へ変換",
            "データソースと制約を明確化"
          ]
        },
        "reportOutputs": {
          "zh": [
            "月度營運摘要",
            "改善行動",
            "續約/增購線索"
          ],
          "en": [
            "Monthly operating summary",
            "Improvement actions",
            "Renewal or expansion cues"
          ],
          "ja": [
            "月次運用要約",
            "改善行動",
            "更新・増車の手がかり"
          ]
        },
        "riskScore": 60
      }
    ]
  },
  "data/energy_roadmap.json": {
    "meta": {
      "schemaVersion": "1.0.0",
      "moduleId": "energy-roadmap",
      "dataStatus": "demo_assumptions",
      "sourceBasis": "Portfolio proposal energy-strategy narrative converted into a static product-planning prototype.",
      "publicBoundary": {
        "zh": "本能源路線圖僅為作品集 demo 假設，不是採購、工程、法務、排放申報或產品上市建議。",
        "en": "This energy roadmap uses portfolio demo assumptions only. It is not a procurement, engineering, legal, emissions-reporting, or product-launch recommendation.",
        "ja": "このエネルギーロードマップはポートフォリオ用のデモ仮定です。調達、設計、法務、排出量報告、製品導入の公式判断ではありません。"
      }
    },
    "defaultInputs": {
      "route_predictability": "high",
      "annual_mileage": "high",
      "payload_level": "medium",
      "depot_charging": "partial",
      "energy_price_stability": "medium",
      "service_readiness": "medium",
      "esg_pressure": "medium",
      "policy_support": "medium"
    },
    "optionLabels": {
      "route_predictability": [
        "low",
        "medium",
        "high"
      ],
      "annual_mileage": [
        "low",
        "medium",
        "high",
        "very_high"
      ],
      "payload_level": [
        "light",
        "medium",
        "heavy",
        "passenger"
      ],
      "depot_charging": [
        "limited",
        "partial",
        "available"
      ],
      "energy_price_stability": [
        "low",
        "medium",
        "high"
      ],
      "service_readiness": [
        "low",
        "medium",
        "high"
      ],
      "esg_pressure": [
        "low",
        "medium",
        "high"
      ],
      "policy_support": [
        "low",
        "medium",
        "high"
      ]
    },
    "powertrains": [
      {
        "id": "diesel",
        "glossaryTerms": [
          "ice",
          "tco",
          "esg"
        ],
        "name": {
          "zh": "柴油 / ICE 基準線",
          "en": "Diesel / ICE baseline",
          "ja": "ディーゼル / ICE 基準線"
        },
        "role": {
          "zh": "在基礎設施不足、重載或停工容忍度低時，仍是近期營運教育與 TCO 比較基準。",
          "en": "A near-term operating and TCO baseline when infrastructure is limited, payload is high, or downtime tolerance is low.",
          "ja": "インフラが不足し、高積載または停止許容度が低い場合の、近期運用と TCO 比較の基準です。"
        },
        "status": "short_term_education",
        "baseFit": 68,
        "serviceReadiness": 88,
        "residualValueWatch": 55,
        "carbonRelative": 100,
        "sohRelevance": 0,
        "dependencies": [
          "fuel_price",
          "emissions_policy",
          "maintenance_network",
          "payload"
        ],
        "risks": {
          "zh": [
            "碳政策與 ESG 壓力可能推高營運成本。",
            "若只看購車價格，容易低估能源與政策風險。"
          ],
          "en": [
            "Carbon policy and ESG pressure may raise operating cost.",
            "Purchase-price-only comparison can understate energy and policy risk."
          ],
          "ja": [
            "カーボン政策と ESG 圧力により運用コストが上がる可能性があります。",
            "購入価格だけの比較では、エネルギーと政策リスクを過小評価しやすくなります。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "用 TCO 拆解油耗、保養、停工與殘值。",
            "說明減碳壓力下柴油仍可作為短期基準，而非唯一答案。"
          ],
          "en": [
            "Break down fuel, maintenance, downtime, and residual value through TCO.",
            "Explain diesel as a short-term baseline under decarbonization pressure, not the only answer."
          ],
          "ja": [
            "燃料、整備、停止時間、残価を TCO で整理します。",
            "脱炭素圧力下では短期基準であり、唯一の答えではないと説明します。"
          ]
        },
        "customerSuitability": {
          "zh": "重載、路線變動大、外部能源基礎設施不足、服務網絡需要高度即時性的客戶。",
          "en": "High payload, variable routes, limited external energy infrastructure, and customers requiring highly immediate service support.",
          "ja": "高積載、変動ルート、外部エネルギーインフラ不足、即応性の高いサービス支援が必要な顧客。"
        }
      },
      {
        "id": "hybrid",
        "glossaryTerms": [
          "hev",
          "tco",
          "esg"
        ],
        "name": {
          "zh": "油電 / Hybrid 過渡路徑",
          "en": "Hybrid transition path",
          "ja": "ハイブリッド移行経路"
        },
        "role": {
          "zh": "在充電條件尚未成熟、但希望降低油耗與教育新能源使用情境時，可作為過渡選項。",
          "en": "A bridge option when charging is not mature but fleets want lower fuel use and gradual new-energy education.",
          "ja": "充電条件が成熟していない一方、燃費低減と新エネルギー教育を進めたい場合の橋渡し選択肢です。"
        },
        "status": "short_term_education",
        "baseFit": 64,
        "serviceReadiness": 72,
        "residualValueWatch": 62,
        "carbonRelative": 78,
        "sohRelevance": 36,
        "dependencies": [
          "route_mix",
          "driver_behavior",
          "service_training",
          "energy_price"
        ],
        "risks": {
          "zh": [
            "若被視為永久解方，可能延後基礎設施與資料能力建立。",
            "維修教育需同時涵蓋 ICE 與電氣系統。"
          ],
          "en": [
            "If treated as a permanent answer, it may delay infrastructure and data capability building.",
            "Service education must cover both ICE and electric systems."
          ],
          "ja": [
            "恒久的な解と見なすと、インフラとデータ能力の構築が遅れる可能性があります。",
            "整備教育では ICE と電動システムの双方を扱う必要があります。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "說明適用於混合路線與中等里程，而非所有車隊。",
            "把油耗改善、駕駛行為與保養條件一起談。"
          ],
          "en": [
            "Explain suitability for mixed routes and medium mileage, not every fleet.",
            "Discuss fuel improvement, driver behavior, and maintenance conditions together."
          ],
          "ja": [
            "混合ルートと中程度の走行距離に向くことを説明し、すべてのフリート向けとはしません。",
            "燃費改善、運転行動、整備条件を一緒に議論します。"
          ]
        },
        "customerSuitability": {
          "zh": "路線混合、充電不穩定、希望降低油耗但尚未準備 BEV PoC 的客戶。",
          "en": "Mixed-route customers with unstable charging access who want lower fuel use but are not ready for a BEV PoC.",
          "ja": "充電アクセスが不安定で、燃費低減を望むが BEV PoC にはまだ早い混合ルート顧客。"
        }
      },
      {
        "id": "bev",
        "glossaryTerms": [
          "bev",
          "tco",
          "soh",
          "poc"
        ],
        "name": {
          "zh": "BEV 場站充電路徑",
          "en": "BEV depot-charging path",
          "ja": "BEV 拠点充電経路"
        },
        "role": {
          "zh": "當路線穩定、年里程足夠、回場充電可規劃、服務與 SOH 管理成熟時，可進入 PoC 與分段導入討論。",
          "en": "A PoC and staged-deployment candidate when routes are stable, mileage is sufficient, depot charging is plannable, and service plus SOH management are ready.",
          "ja": "ルートが安定し、走行距離が十分で、拠点充電を計画でき、サービスと SOH 管理が整った場合の PoC・段階導入候補です。"
        },
        "status": "medium_term_poc",
        "baseFit": 72,
        "serviceReadiness": 58,
        "residualValueWatch": 68,
        "carbonRelative": 44,
        "sohRelevance": 92,
        "dependencies": [
          "route_stability",
          "depot_power",
          "charging_window",
          "battery_soh",
          "service_training"
        ],
        "risks": {
          "zh": [
            "若場站電力、停車動線或充電時窗不足，TCO 交叉點會延後。",
            "殘值、保固與 SOH 管理需要長期資料。"
          ],
          "en": [
            "If depot power, parking flow, or charging windows are weak, TCO crossover is delayed.",
            "Residual value, warranty, and SOH management need long-term data."
          ],
          "ja": [
            "拠点電力、駐車動線、充電時間帯が弱い場合、TCO クロスオーバーは遅れます。",
            "残価、保証、SOH 管理には長期データが必要です。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "先教回場充電、路線盤點、TCO 與 SOH，不直接承諾全車隊替換。",
            "把能源資料、維修流程與客戶停工成本放進 PoC。"
          ],
          "en": [
            "Teach depot charging, route mapping, TCO, and SOH before promising fleet-wide replacement.",
            "Include energy data, service workflow, and downtime cost in the PoC."
          ],
          "ja": [
            "全車隊置換を約束する前に、拠点充電、ルート把握、TCO、SOH を教育します。",
            "PoC にはエネルギーデータ、整備フロー、停止コストを含めます。"
          ]
        },
        "customerSuitability": {
          "zh": "固定路線、市區配送、場站可充電、高里程且 ESG 壓力明確的客戶。",
          "en": "Fixed routes, urban delivery, depot charging, high mileage, and customers with clear ESG pressure.",
          "ja": "固定ルート、都市配送、拠点充電、高走行距離、明確な ESG 圧力を持つ顧客。"
        }
      },
      {
        "id": "fcev",
        "glossaryTerms": [
          "fcev",
          "tco",
          "poc"
        ],
        "name": {
          "zh": "FCEV 氫能長期追蹤",
          "en": "FCEV hydrogen long-term tracking",
          "ja": "FCEV 水素長期追跡"
        },
        "role": {
          "zh": "在長途、高載重、補能速度重要且氫能站點成熟之前，較適合作為長期追蹤與有限 PoC 題目。",
          "en": "Better treated as long-term tracking and limited PoC work until hydrogen sites mature for long-haul, high-payload, fast-refueling needs.",
          "ja": "長距離・高積載・短時間補給の用途で水素拠点が成熟するまでは、長期追跡と限定 PoC が中心です。"
        },
        "status": "long_term_tracking",
        "baseFit": 48,
        "serviceReadiness": 34,
        "residualValueWatch": 42,
        "carbonRelative": 38,
        "sohRelevance": 18,
        "dependencies": [
          "hydrogen_station",
          "fuel_supply",
          "safety_training",
          "policy_support",
          "payload"
        ],
        "risks": {
          "zh": [
            "氫能站點、燃料來源與維修安全教育不足時，不宜包裝成近期量產解方。",
            "成本與供應穩定性需以實證資料覆核。"
          ],
          "en": [
            "Without hydrogen sites, fuel supply, and safety-service education, it should not be framed as a near-term rollout answer.",
            "Cost and supply stability need evidence-based review."
          ],
          "ja": [
            "水素拠点、燃料供給、安全・整備教育が不足する場合、近期展開の解として扱うべきではありません。",
            "コストと供給安定性は実証データで確認する必要があります。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "以安全、補能基礎設施與適用任務為主，不做廣泛道路承諾。",
            "把氫能定位為追蹤題，而非短期全市場答案。"
          ],
          "en": [
            "Focus on safety, refueling infrastructure, and mission fit instead of broad road-deployment promises.",
            "Position hydrogen as a tracking topic, not a short-term answer for the whole market."
          ],
          "ja": [
            "安全、補給インフラ、用途適合性を中心に説明し、広範な道路展開を約束しません。",
            "水素は追跡テーマであり、短期の全市場回答ではないと位置づけます。"
          ]
        },
        "customerSuitability": {
          "zh": "長途、高載重、回場充電困難且氫能補給站點具體可驗證的客戶。",
          "en": "Long-haul, high-payload customers with difficult depot charging and verifiable hydrogen refueling access.",
          "ja": "長距離・高積載で拠点充電が難しく、水素補給アクセスを確認できる顧客。"
        }
      },
      {
        "id": "v2g",
        "glossaryTerms": [
          "v2g",
          "bev",
          "soh",
          "tco"
        ],
        "name": {
          "zh": "V2G 與能源管理服務",
          "en": "V2G and energy-management service",
          "ja": "V2G とエネルギーマネジメントサービス"
        },
        "role": {
          "zh": "在雙向充電、電網規則、保固、SOH 與收益模式成熟前，適合放在長期追蹤或暫緩觀察。",
          "en": "A long-term tracking or deferred topic until bidirectional charging, grid rules, warranty, SOH, and revenue models mature.",
          "ja": "双方向充電、電網ルール、保証、SOH、収益モデルが成熟するまでは、長期追跡または保留観察のテーマです。"
        },
        "status": "deferred_observation",
        "baseFit": 38,
        "serviceReadiness": 26,
        "residualValueWatch": 46,
        "carbonRelative": 30,
        "sohRelevance": 95,
        "dependencies": [
          "grid_rule",
          "bidirectional_charger",
          "battery_warranty",
          "energy_market",
          "data_governance"
        ],
        "risks": {
          "zh": [
            "若未釐清保固、電池壽命與收益分配，容易造成客戶誤解。",
            "需避免把示意收益當作已可落地的商業模式。"
          ],
          "en": [
            "Without warranty, battery-life, and revenue-sharing clarity, customers can misunderstand the value proposition.",
            "Illustrative revenue should not be treated as an already deployable business model."
          ],
          "ja": [
            "保証、電池寿命、収益配分が明確でないと、顧客が価値を誤解しやすくなります。",
            "示意的な収益を、すぐ実装できる事業モデルとして扱わないようにします。"
          ]
        },
        "dealerEducation": {
          "zh": [
            "先教育 V2G 的限制、SOH 影響與法規前提。",
            "把能源服務和車輛銷售分開說明，避免過度承諾。"
          ],
          "en": [
            "Teach V2G limits, SOH impact, and regulatory prerequisites first.",
            "Separate energy-service discussion from vehicle sales to avoid overcommitment."
          ],
          "ja": [
            "まず V2G の制約、SOH への影響、規制前提を教育します。",
            "エネルギーサービスと車両販売を分けて説明し、過度な約束を避けます。"
          ]
        },
        "customerSuitability": {
          "zh": "具備成熟場站能源管理、電池資料治理、雙向充電設備與人員覆核能力的封閉場域。",
          "en": "Closed sites with mature depot energy management, battery-data governance, bidirectional equipment, and human review capability.",
          "ja": "成熟した拠点エネルギー管理、電池データガバナンス、双方向設備、人による確認能力を持つ閉域サイト。"
        }
      }
    ],
    "roadmapSegments": [
      {
        "powertrainId": "diesel",
        "type": "education",
        "start": 2026,
        "end": 2028
      },
      {
        "powertrainId": "diesel",
        "type": "tracking",
        "start": 2029,
        "end": 2035
      },
      {
        "powertrainId": "hybrid",
        "type": "education",
        "start": 2026,
        "end": 2029
      },
      {
        "powertrainId": "hybrid",
        "type": "poc",
        "start": 2027,
        "end": 2031
      },
      {
        "powertrainId": "bev",
        "type": "education",
        "start": 2026,
        "end": 2028
      },
      {
        "powertrainId": "bev",
        "type": "poc",
        "start": 2027,
        "end": 2032
      },
      {
        "powertrainId": "bev",
        "type": "tracking",
        "start": 2031,
        "end": 2035
      },
      {
        "powertrainId": "fcev",
        "type": "tracking",
        "start": 2026,
        "end": 2035
      },
      {
        "powertrainId": "fcev",
        "type": "poc",
        "start": 2030,
        "end": 2034
      },
      {
        "powertrainId": "v2g",
        "type": "defer",
        "start": 2026,
        "end": 2029
      },
      {
        "powertrainId": "v2g",
        "type": "tracking",
        "start": 2030,
        "end": 2035
      }
    ],
    "crossoverModel": {
      "years": [
        2026,
        2027,
        2028,
        2029,
        2030,
        2031,
        2032,
        2033,
        2034,
        2035
      ],
      "series": {
        "diesel": {
          "start": 100,
          "annual": 8.2,
          "carbonPenalty": 2.4
        },
        "hybrid": {
          "start": 112,
          "annual": 6.5,
          "carbonPenalty": 1.4
        },
        "bev": {
          "start": 130,
          "annual": 4.7,
          "infraPenalty": 8.5,
          "mileageBenefit": 4.2
        },
        "fcev": {
          "start": 158,
          "annual": 5.8,
          "infraPenalty": 14.0,
          "policyBenefit": 3.8
        }
      }
    },
    "carbonPanel": {
      "baselineUnit": "demo relative lifecycle operating signal",
      "notes": {
        "zh": "碳影響為示意相對值，正式盤查需使用邊界、活動數據、能源係數與現行法規。",
        "en": "Carbon impact is an illustrative relative value. Formal accounting requires boundaries, activity data, energy factors, and current regulation.",
        "ja": "炭素影響は相対的なデモ値です。正式な算定には境界、活動データ、エネルギー係数、最新規制が必要です。"
      }
    }
  },
  "data/esg_policy_dashboard.json": {
    "meta": {
      "schemaVersion": "1.0.0",
      "moduleId": "esg-policy-dashboard",
      "dataStatus": "demo_assumptions",
      "sourceBasis": "Portfolio proposal ESG, carbon tracking, energy-transition, policy-monitoring, and fleet decarbonization planning narrative converted into a static dashboard prototype.",
      "publicBoundary": {
        "zh": "本 ESG 與政策儀表板僅使用 demo 假設與來源檢核占位，不代表最新法規、補助資格、正式碳盤查或企業揭露結論。",
        "en": "This ESG & Policy Dashboard uses demo assumptions and source-check placeholders only. It is not current legal, subsidy, carbon-accounting, or corporate-reporting advice.",
        "ja": "この ESG・政策ダッシュボードはデモ仮定と出典確認用のプレースホルダーのみを使用します。最新法規、補助資格、正式な炭素会計、企業開示の助言ではありません。"
      },
      "accountingCaveat": {
        "zh": "任何減碳估算都取決於燃料使用、電力排放係數、再生能源比例、任務循環、里程、載重與企業核准的盤查方法。",
        "en": "Any carbon estimate depends on fuel use, electricity emission factors, renewable share, duty cycle, mileage, payload, and an enterprise-approved accounting method.",
        "ja": "炭素推計は、燃料使用量、電力排出係数、再生可能電力比率、稼働サイクル、走行距離、積載、企業承認済みの算定方法に依存します。"
      }
    },
    "carbonModel": {
      "factors": {
        "dieselKgCo2ePerLiterDemo": 2.68,
        "electricityKgCo2ePerKwhDemo": 0.49
      },
      "inputs": [
        {
          "id": "annualMileage",
          "unit": "km/year",
          "default": "medium",
          "options": [
            {
              "id": "low",
              "value": 25000
            },
            {
              "id": "medium",
              "value": 55000
            },
            {
              "id": "high",
              "value": 90000
            }
          ]
        },
        {
          "id": "dieselIntensity",
          "unit": "L/100km",
          "default": "medium",
          "options": [
            {
              "id": "light",
              "value": 12
            },
            {
              "id": "medium",
              "value": 21
            },
            {
              "id": "heavy",
              "value": 32
            }
          ]
        },
        {
          "id": "electricIntensity",
          "unit": "kWh/100km",
          "default": "medium",
          "options": [
            {
              "id": "efficient",
              "value": 48
            },
            {
              "id": "medium",
              "value": 76
            },
            {
              "id": "heavy",
              "value": 116
            }
          ]
        },
        {
          "id": "renewableShare",
          "unit": "%",
          "default": "medium",
          "options": [
            {
              "id": "low",
              "value": 0
            },
            {
              "id": "medium",
              "value": 30
            },
            {
              "id": "high",
              "value": 70
            }
          ]
        },
        {
          "id": "replacementShare",
          "unit": "%",
          "default": "pilot",
          "options": [
            {
              "id": "pilot",
              "value": 15
            },
            {
              "id": "partial",
              "value": 35
            },
            {
              "id": "focused",
              "value": 60
            }
          ]
        }
      ]
    },
    "policySignals": [
      {
        "id": "policy_monitoring",
        "category": "policy_check",
        "sourceStatus": "latest_verification_required",
        "sourceConfidence": "low",
        "updateDatePlaceholder": "YYYY-MM-DD latest policy check required",
        "glossaryTerms": [
          "esg",
          "kpi",
          "poc"
        ],
        "name": {
          "zh": "政策與補助監測節點",
          "en": "Policy and subsidy monitoring node",
          "ja": "政策・補助モニタリングノード"
        },
        "summary": {
          "zh": "把補助、車種資格、路權、能源建置與揭露要求列為需要定期查證的企劃輸入。",
          "en": "Treats subsidy programs, vehicle eligibility, access rules, energy buildout, and disclosure requirements as planning inputs that need routine verification.",
          "ja": "補助制度、車種適格性、通行条件、エネルギー整備、開示要件を、定期確認が必要な企画入力として扱います。"
        },
        "metrics": {
          "policyReadiness": 46,
          "carbonInfluence": 62,
          "customerPressure": 70,
          "dataReadiness": 48
        },
        "planningUse": {
          "zh": "適合建立每季政策檢核表，而不是直接判斷採購或上市時點。",
          "en": "Useful for building a quarterly policy checklist, not for making procurement or launch decisions by itself.",
          "ja": "四半期ごとの政策確認リスト作成には有用ですが、調達や上市時期を単独で判断するものではありません。"
        },
        "limitation": {
          "zh": "補助與法規可能快速變動，必須由最新官方來源與法務/合規人員覆核。",
          "en": "Subsidies and rules can change quickly and must be checked against current official sources and legal or compliance review.",
          "ja": "補助や規則は変わりやすく、最新の公式情報と法務・コンプライアンス確認が必要です。"
        },
        "actions": {
          "zh": [
            "建立政策來源清單",
            "標記最後更新日期",
            "把資格條件拆成車型、用途、能源與申請流程"
          ],
          "en": [
            "Create a source checklist",
            "Record last update date",
            "Split eligibility into vehicle, use case, energy, and application steps"
          ],
          "ja": [
            "出典チェックリストを作る",
            "最終更新日を記録する",
            "適格条件を車型、用途、エネルギー、申請手順に分ける"
          ]
        }
      },
      {
        "id": "carbon_reporting_pressure",
        "category": "reporting_need",
        "sourceStatus": "demo_assumption",
        "sourceConfidence": "medium",
        "updateDatePlaceholder": "Demo reporting need placeholder",
        "glossaryTerms": [
          "esg",
          "co2",
          "carbon-accounting",
          "kpi"
        ],
        "name": {
          "zh": "客戶碳揭露壓力",
          "en": "Customer carbon-reporting pressure",
          "ja": "顧客の炭素開示圧力"
        },
        "summary": {
          "zh": "將企業永續揭露、供應鏈要求與車隊營運資料需求連結起來，提醒產品企劃先定義資料邊界。",
          "en": "Connects sustainability disclosure, supply-chain requests, and fleet operating data needs so product planning defines data boundaries first.",
          "ja": "サステナビリティ開示、サプライチェーン要請、フリート運用データを結び、商品企画が先にデータ境界を定義する必要性を示します。"
        },
        "metrics": {
          "policyReadiness": 58,
          "carbonInfluence": 82,
          "customerPressure": 86,
          "dataReadiness": 54
        },
        "planningUse": {
          "zh": "可支援客戶訪談、報告欄位設計與 connected fleet 服務優先順序。",
          "en": "Supports customer interviews, report field design, and connected-fleet service prioritization.",
          "ja": "顧客インタビュー、レポート項目設計、コネクテッドフリートサービスの優先順位づけに役立ちます。"
        },
        "limitation": {
          "zh": "沒有企業核准的盤查方法與排放係數時，不應宣稱已驗證減量。",
          "en": "Do not claim verified reductions without an enterprise-approved accounting method and verified emission factors.",
          "ja": "企業承認済みの算定方法と確認済み排出係数がない場合、検証済み削減と主張してはいけません。"
        },
        "actions": {
          "zh": [
            "定義 CO2/CO2e 欄位",
            "確認活動數據來源",
            "把 demo 報告與正式揭露分開"
          ],
          "en": [
            "Define CO2/CO2e fields",
            "Confirm activity-data sources",
            "Separate demo reports from formal disclosure"
          ],
          "ja": [
            "CO2/CO2e 項目を定義する",
            "活動データの出典を確認する",
            "デモレポートと正式開示を分ける"
          ]
        }
      },
      {
        "id": "diesel_replacement_signal",
        "category": "energy_transition",
        "sourceStatus": "demo_assumption",
        "sourceConfidence": "medium",
        "updateDatePlaceholder": "Demo 2026-2035 planning signal",
        "glossaryTerms": [
          "bev",
          "fcev",
          "co2",
          "tco"
        ],
        "name": {
          "zh": "柴油替代與能源轉型訊號",
          "en": "Diesel replacement and energy-transition signal",
          "ja": "ディーゼル代替とエネルギー転換シグナル"
        },
        "summary": {
          "zh": "把柴油替代討論放回路線穩定、載重、能源補給、維修網絡與 TCO 交叉條件。",
          "en": "Places diesel replacement back into route stability, payload, energy access, service network, and TCO crossover conditions.",
          "ja": "ディーゼル代替を、ルート安定性、積載、エネルギー補給、整備ネットワーク、TCO 交差条件の中で捉えます。"
        },
        "metrics": {
          "policyReadiness": 52,
          "carbonInfluence": 78,
          "customerPressure": 64,
          "dataReadiness": 60
        },
        "planningUse": {
          "zh": "適合連結 Energy Roadmap 與 Scenario Simulator，判斷教育或 PoC 條件。",
          "en": "Useful for linking the Energy Roadmap and Scenario Simulator to decide education or PoC conditions.",
          "ja": "Energy Roadmap と Scenario Simulator を結び、教育や PoC 条件を判断するのに有用です。"
        },
        "limitation": {
          "zh": "不能以能源名稱直接推論總碳排；需看實際任務、能源來源與使用方法。",
          "en": "A powertrain name alone cannot prove total carbon impact; actual duty, energy source, and use pattern matter.",
          "ja": "パワートレイン名だけで総炭素影響は判断できません。実際の任務、エネルギー源、使い方が重要です。"
        },
        "actions": {
          "zh": [
            "整理高穩定路線",
            "標記載重與停車時間",
            "評估 BEV/FCEV 教育與 PoC 條件"
          ],
          "en": [
            "Map stable routes",
            "Tag payload and parking windows",
            "Assess BEV/FCEV education and PoC conditions"
          ],
          "ja": [
            "安定ルートを整理する",
            "積載と駐車時間を記録する",
            "BEV/FCEV 教育と PoC 条件を評価する"
          ]
        }
      },
      {
        "id": "renewable_electricity_share",
        "category": "energy_factor",
        "sourceStatus": "source_placeholder",
        "sourceConfidence": "low",
        "updateDatePlaceholder": "Electricity factor and renewable share must be refreshed",
        "glossaryTerms": [
          "v2g",
          "co2",
          "esg",
          "carbon-accounting"
        ],
        "name": {
          "zh": "再生能源比例與電力係數",
          "en": "Renewable share and electricity factor",
          "ja": "再生可能電力比率と電力係数"
        },
        "summary": {
          "zh": "提醒產品企劃不要只看尾管排放，也要確認充電來源、電力排放係數與是否可追溯。",
          "en": "Reminds planners not to look only at tailpipe emissions; charging source, electricity factor, and traceability also matter.",
          "ja": "テールパイプ排出だけでなく、充電電源、電力排出係数、追跡可能性も確認すべきことを示します。"
        },
        "metrics": {
          "policyReadiness": 44,
          "carbonInfluence": 88,
          "customerPressure": 66,
          "dataReadiness": 42
        },
        "planningUse": {
          "zh": "適合設計能源資料欄位、場站訪談與 V2G 長期追蹤議題。",
          "en": "Useful for designing energy data fields, depot interviews, and longer-term V2G tracking topics.",
          "ja": "エネルギーデータ項目、拠点ヒアリング、V2G の長期追跡テーマ設計に役立ちます。"
        },
        "limitation": {
          "zh": "電力係數與再生能源證明若未更新，demo 估算不能進入正式報告。",
          "en": "If electricity factors and renewable certificates are not current, demo estimates must not enter formal reporting.",
          "ja": "電力係数や再生可能電力証書が最新でない場合、デモ推計を正式報告に使ってはいけません。"
        },
        "actions": {
          "zh": [
            "建立電力係數更新節奏",
            "確認場站充電來源",
            "追蹤再生能源憑證或合約資料"
          ],
          "en": [
            "Set an electricity-factor refresh cadence",
            "Confirm depot charging sources",
            "Track renewable certificates or contracts"
          ],
          "ja": [
            "電力係数更新の周期を決める",
            "拠点充電の電源を確認する",
            "再エネ証書や契約情報を追跡する"
          ]
        }
      },
      {
        "id": "subsidy_eligibility_watch",
        "category": "subsidy_check",
        "sourceStatus": "latest_verification_required",
        "sourceConfidence": "low",
        "updateDatePlaceholder": "Latest subsidy program check required",
        "glossaryTerms": [
          "bev",
          "fcev",
          "poc",
          "kpi"
        ],
        "name": {
          "zh": "補助資格與申請條件觀察",
          "en": "Subsidy eligibility and application-condition watch",
          "ja": "補助適格性と申請条件の観察"
        },
        "summary": {
          "zh": "把補助資格拆成車型、車重、用途、能源設備、申請文件與時程，不把補助視為必然條件。",
          "en": "Breaks subsidy eligibility into vehicle type, weight, use case, energy equipment, documents, and timing without treating subsidies as guaranteed.",
          "ja": "補助適格性を車型、重量、用途、エネルギー設備、書類、時期に分け、補助を確実な前提として扱いません。"
        },
        "metrics": {
          "policyReadiness": 40,
          "carbonInfluence": 55,
          "customerPressure": 72,
          "dataReadiness": 50
        },
        "planningUse": {
          "zh": "適合建立客戶諮詢清單與 PoC 條件，不適合直接承諾補助取得。",
          "en": "Useful for customer consultation checklists and PoC conditions, not for promising subsidy approval.",
          "ja": "顧客相談チェックリストや PoC 条件には有用ですが、補助取得を約束するものではありません。"
        },
        "limitation": {
          "zh": "補助來源、資格與預算皆須最新驗證，且需分開處理地方與中央條件。",
          "en": "Subsidy sources, eligibility, and budget must be verified with current information, with local and national rules separated.",
          "ja": "補助の出典、適格性、予算は最新確認が必要で、地方条件と国レベル条件を分ける必要があります。"
        },
        "actions": {
          "zh": [
            "列出最新補助來源",
            "標記資格不確定項",
            "把補助資訊放入人工覆核流程"
          ],
          "en": [
            "List current subsidy sources",
            "Flag uncertain eligibility items",
            "Place subsidy information into human review"
          ],
          "ja": [
            "最新補助の出典を列挙する",
            "不確実な適格項目を示す",
            "補助情報を人による確認フローに入れる"
          ]
        }
      },
      {
        "id": "customer_reporting_need",
        "category": "customer_reporting",
        "sourceStatus": "simulated_source",
        "sourceConfidence": "medium",
        "updateDatePlaceholder": "Customer interview placeholder",
        "glossaryTerms": [
          "esg",
          "kpi",
          "co2",
          "fms"
        ],
        "name": {
          "zh": "客戶營運報告需求",
          "en": "Customer operating-report need",
          "ja": "顧客運用レポート需要"
        },
        "summary": {
          "zh": "把營運效率、能源使用、碳追蹤、妥善率與改善行動包成客戶可理解的 reporting service。",
          "en": "Packages operating efficiency, energy use, carbon tracking, uptime, and improvement actions into customer-readable reporting service concepts.",
          "ja": "運用効率、エネルギー使用、炭素追跡、稼働率、改善行動を、顧客が読めるレポーティングサービス概念へまとめます。"
        },
        "metrics": {
          "policyReadiness": 60,
          "carbonInfluence": 70,
          "customerPressure": 82,
          "dataReadiness": 58
        },
        "planningUse": {
          "zh": "可延伸 Connected Fleet Lab，但必須清楚分隔 demo 報告、內部管理報告與正式永續揭露。",
          "en": "Can extend the Connected Fleet Lab, but demo reports, internal management reports, and formal sustainability disclosure must stay clearly separated.",
          "ja": "Connected Fleet Lab を拡張できますが、デモレポート、内部管理レポート、正式なサステナビリティ開示は明確に分ける必要があります。"
        },
        "limitation": {
          "zh": "報告不能暗示即時遙測或真實資料收集；所有欄位需有同意與保存規則。",
          "en": "Reports must not imply live telemetry or real data collection; every field needs consent and retention rules.",
          "ja": "レポートはライブテレメトリーや実データ収集を示唆してはいけません。すべての項目に同意と保存ルールが必要です。"
        },
        "actions": {
          "zh": [
            "設計客戶訪談題目",
            "定義 KPI 與資料欄位",
            "把正式揭露欄位交由人工覆核"
          ],
          "en": [
            "Design customer interview questions",
            "Define KPIs and data fields",
            "Route formal disclosure fields to human review"
          ],
          "ja": [
            "顧客インタビュー項目を設計する",
            "KPI とデータ項目を定義する",
            "正式開示項目を人による確認へ回す"
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": "2026",
        "status": "source_placeholder",
        "label": {
          "zh": "來源盤點與資料欄位定義",
          "en": "Source inventory and data-field definition",
          "ja": "出典棚卸しとデータ項目定義"
        }
      },
      {
        "year": "2027",
        "status": "demo_assumption",
        "label": {
          "zh": "客戶 reporting need 訪談",
          "en": "Customer reporting-need interviews",
          "ja": "顧客レポート需要ヒアリング"
        }
      },
      {
        "year": "2028",
        "status": "latest_verification_required",
        "label": {
          "zh": "補助與政策條件複核",
          "en": "Subsidy and policy-condition review",
          "ja": "補助・政策条件の再確認"
        }
      },
      {
        "year": "2029",
        "status": "demo_assumption",
        "label": {
          "zh": "BEV 路線與場站能源 PoC",
          "en": "BEV route and depot-energy PoC",
          "ja": "BEV ルートと拠点エネルギー PoC"
        }
      },
      {
        "year": "2030",
        "status": "source_placeholder",
        "label": {
          "zh": "電力係數與再生能源證明更新",
          "en": "Electricity factor and renewable proof refresh",
          "ja": "電力係数と再エネ証明の更新"
        }
      },
      {
        "year": "2032",
        "status": "demo_assumption",
        "label": {
          "zh": "車隊減碳壓力與服務包裝",
          "en": "Fleet decarbonization pressure and service packaging",
          "ja": "フリート脱炭素圧力とサービス化"
        }
      },
      {
        "year": "2035",
        "status": "latest_verification_required",
        "label": {
          "zh": "長期政策與能源條件再驗證",
          "en": "Long-term policy and energy-condition revalidation",
          "ja": "長期政策とエネルギー条件の再検証"
        }
      }
    ],
    "recommendations": [
      {
        "id": "source_check_cadence",
        "glossaryTerms": [
          "esg",
          "kpi"
        ],
        "title": {
          "zh": "建立來源檢核節奏",
          "en": "Set a source-check cadence",
          "ja": "出典確認の周期を設定"
        },
        "body": {
          "zh": "把政策、補助、電力係數與企業揭露要求分成月檢、季檢與正式覆核項目。",
          "en": "Separate policy, subsidy, electricity-factor, and disclosure requirements into monthly checks, quarterly checks, and formal review items.",
          "ja": "政策、補助、電力係数、開示要件を月次確認、四半期確認、正式確認項目に分けます。"
        }
      },
      {
        "id": "carbon_data_contract",
        "glossaryTerms": [
          "co2",
          "carbon-accounting"
        ],
        "title": {
          "zh": "先定義碳資料合約",
          "en": "Define the carbon data contract first",
          "ja": "先に炭素データ契約を定義"
        },
        "body": {
          "zh": "確認燃料、電力、里程、載重、任務循環、排放係數與資料保存規則，再談報告功能。",
          "en": "Confirm fuel, electricity, mileage, payload, duty cycle, emission factors, and retention rules before discussing reporting features.",
          "ja": "レポート機能を議論する前に、燃料、電力、走行距離、積載、稼働サイクル、排出係数、保存ルールを確認します。"
        }
      },
      {
        "id": "customer_interview",
        "glossaryTerms": [
          "fms",
          "esg",
          "kpi"
        ],
        "title": {
          "zh": "把 ESG 轉成客戶訪談題",
          "en": "Turn ESG into customer interview questions",
          "ja": "ESG を顧客ヒアリング項目へ変換"
        },
        "body": {
          "zh": "訪談客戶的 reporting owner、資料來源、審核流程與希望看到的 fleet KPI。",
          "en": "Interview customers on reporting ownership, data sources, approval flow, and the fleet KPIs they expect to see.",
          "ja": "レポート責任者、データ出典、承認フロー、期待するフリート KPI を顧客に確認します。"
        }
      },
      {
        "id": "poc_boundary",
        "glossaryTerms": [
          "bev",
          "fcev",
          "poc"
        ],
        "title": {
          "zh": "PoC 邊界要比口號更清楚",
          "en": "Make PoC boundaries clearer than slogans",
          "ja": "PoC の境界をスローガンより明確に"
        },
        "body": {
          "zh": "用路線、載重、充電/加氫條件、維修支援與客戶資料同意來界定 PoC。",
          "en": "Define PoCs by route, payload, charging or hydrogen conditions, service support, and customer data consent.",
          "ja": "ルート、積載、充電・水素条件、整備支援、顧客データ同意で PoC を定義します。"
        }
      }
    ]
  },
  "data/glossary_terms.json": [
    {
      "termId": "tco",
      "acronym": "TCO",
      "fullNameEn": "Total Cost of Ownership",
      "fullNameZh": "總持有成本",
      "fullNameJa": "総保有コスト",
      "definitionEn": "A cost framework that includes acquisition, energy, maintenance, downtime, financing, residual value, and related ownership costs.",
      "definitionZh": "評估車輛從購置、能源、維修、停機、融資到殘值的整體成本框架。",
      "definitionJa": "車両の購入、エネルギー、整備、停止時間、資金調達、残価まで含めて見る総コストの考え方。",
      "planningRelevanceEn": "Supports fleet purchase and powertrain decisions beyond purchase price.",
      "planningRelevanceZh": "協助車隊比較不同動力與服務方案，而不是只看購置價格。",
      "planningRelevanceJa": "購入価格だけでなく、動力方式やサービス案を比較するための基準になります。",
      "sourceCategory": "business / fleet finance",
      "sourceNote": "Planning framework; formulas require validation before business use."
    },
    {
      "termId": "ice",
      "acronym": "ICE",
      "fullNameEn": "Internal Combustion Engine",
      "fullNameZh": "內燃機",
      "fullNameJa": "内燃機関",
      "definitionEn": "An engine that burns fuel inside the engine to produce power, such as gasoline or diesel engines.",
      "definitionZh": "將汽油、柴油等燃料在引擎內燃燒，並轉換為車輛動力的裝置。",
      "definitionJa": "ガソリンや軽油などをエンジン内部で燃焼させ、車両の動力へ変換する装置。",
      "planningRelevanceEn": "Provides the baseline for comparing diesel, hybrid, BEV, and FCEV scenarios.",
      "planningRelevanceZh": "作為柴油、混合動力、BEV 與 FCEV 等方案比較的基準。",
      "planningRelevanceJa": "ディーゼル、ハイブリッド、BEV、FCEV などを比較する基準になります。",
      "sourceCategory": "automotive fundamentals",
      "sourceNote": "General term; no brand implication."
    },
    {
      "termId": "ev",
      "acronym": "EV",
      "fullNameEn": "Electric Vehicle",
      "fullNameZh": "電動車",
      "fullNameJa": "電動車両",
      "definitionEn": "A vehicle propelled wholly or partly by electric power.",
      "definitionZh": "全部或部分以電力驅動的車輛類別，包含 BEV、PHEV 與其他電驅系統。",
      "definitionJa": "全部または一部を電力で駆動する車両の総称で、BEV、PHEV、その他の電動駆動を含みます。",
      "planningRelevanceEn": "Acts as the broad category for BEV, PHEV, and other electric-drive discussions.",
      "planningRelevanceZh": "討論產品策略時應進一步區分電池容量、充電條件、續航、載重與用途。",
      "planningRelevanceJa": "商品戦略では、電池容量、充電条件、航続距離、積載、用途を分けて検討する必要があります。",
      "sourceCategory": "energy / automotive",
      "sourceNote": "Use precise subtypes when making product claims."
    },
    {
      "termId": "bev",
      "acronym": "BEV",
      "fullNameEn": "Battery Electric Vehicle",
      "fullNameZh": "電池電動車",
      "fullNameJa": "バッテリー電気自動車",
      "definitionEn": "A vehicle powered by electricity stored in a battery pack and driven by electric motors.",
      "definitionZh": "以電池儲存的電力驅動馬達行駛，不使用內燃機作為主要動力。",
      "definitionJa": "バッテリーに蓄えた電力でモーターを駆動して走る車両です。",
      "planningRelevanceEn": "Important for fixed-route delivery, buses, depot-based fleets, and charging strategy.",
      "planningRelevanceZh": "適合評估固定路線、場站充電、城市配送與巴士等可預測營運情境。",
      "planningRelevanceJa": "固定ルート、拠点充電、都市配送、バス運行など予測しやすい業務で検討しやすい技術です。",
      "sourceCategory": "DOE / AFDC / automotive",
      "sourceNote": "Range, charging, payload, and residual value require local validation."
    },
    {
      "termId": "hev",
      "acronym": "HEV",
      "fullNameEn": "Hybrid Electric Vehicle",
      "fullNameZh": "混合動力電動車",
      "fullNameJa": "ハイブリッド電気自動車",
      "definitionEn": "A vehicle that combines an internal combustion engine with electric drive assistance.",
      "definitionZh": "結合內燃機與電動輔助系統，在不同工況下分擔或回收能量的車輛。",
      "definitionJa": "内燃機関と電動補助を組み合わせ、走行条件に応じて動力補助やエネルギー回生を行う車両。",
      "planningRelevanceEn": "May serve as a transition option for some urban or stop-and-go duty cycles.",
      "planningRelevanceZh": "可作為部分都市、走走停停或基礎設施尚未成熟場景的過渡選項。",
      "planningRelevanceJa": "都市部や停止発進の多い用途、インフラが未成熟な場面で移行期の選択肢になり得ます。",
      "sourceCategory": "automotive fundamentals",
      "sourceNote": "Exact value depends on vehicle supply, duty cycle, and cost."
    },
    {
      "termId": "fcev",
      "acronym": "FCEV",
      "fullNameEn": "Fuel Cell Electric Vehicle",
      "fullNameZh": "燃料電池電動車",
      "fullNameJa": "燃料電池電気自動車",
      "definitionEn": "An electric vehicle that generates onboard electricity through a hydrogen fuel cell.",
      "definitionZh": "利用氫氣與氧氣在燃料電池中發電，供馬達驅動車輛。",
      "definitionJa": "水素と酸素を燃料電池で反応させて発電し、その電力でモーターを駆動する車両です。",
      "planningRelevanceEn": "Relevant to long-haul or high-payload scenarios, subject to hydrogen infrastructure.",
      "planningRelevanceZh": "可作為長里程、高稼動或補能時間敏感場景的長期追蹤選項，但需氫能基礎設施與服務網絡成熟。",
      "planningRelevanceJa": "長距離、高稼働、補給時間に敏感な用途の長期候補ですが、水素インフラとサービス網の成熟が前提です。",
      "sourceCategory": "DOE / AFDC",
      "sourceNote": "Use as a long-term scenario unless local infrastructure evidence supports a nearer role."
    },
    {
      "termId": "adas",
      "acronym": "ADAS",
      "fullNameEn": "Advanced Driver Assistance Systems",
      "fullNameZh": "先進駕駛輔助系統",
      "fullNameJa": "先進運転支援システム",
      "definitionEn": "Driver-assistance technologies that provide warnings or support selected driving tasks while the driver remains responsible.",
      "definitionZh": "透過感測器、控制邏輯與警示或輔助控制，協助駕駛辨識風險並降低操作負擔的系統。",
      "definitionJa": "センサー、制御ロジック、警報や支援制御により、運転者のリスク認識と操作負担を補助するシステム。",
      "planningRelevanceEn": "Supports safety education, customer communication, and dealer training.",
      "planningRelevanceZh": "規劃時必須同時說明功能邊界、駕駛責任、教育方式與適用場景。",
      "planningRelevanceJa": "企画時には機能範囲、運転者責任、教育方法、適用場面を合わせて説明する必要があります。",
      "sourceCategory": "NHTSA / safety technology",
      "sourceNote": "Avoid implying automated driving or guaranteed crash prevention."
    },
    {
      "termId": "aeb",
      "acronym": "AEB",
      "fullNameEn": "Automatic Emergency Braking",
      "fullNameZh": "自動緊急煞車",
      "fullNameJa": "自動緊急ブレーキ",
      "definitionEn": "A driver-assistance function that can apply braking when a potential collision is detected.",
      "definitionZh": "當系統判斷可能發生前方碰撞時，發出警示並在條件允許下協助煞車的安全功能。",
      "definitionJa": "前方衝突の可能性を検知した際に警告し、条件が合う場合にブレーキを支援する安全機能。",
      "planningRelevanceEn": "Useful for safety education, but system limitations must be explained.",
      "planningRelevanceZh": "應避免宣稱消除事故，並清楚教育感測限制、速度範圍、載重與道路環境影響。",
      "planningRelevanceJa": "事故をなくすと表現せず、センサー限界、速度域、積載、道路環境の影響を明確に伝える必要があります。",
      "sourceCategory": "NHTSA / safety technology",
      "sourceNote": "Do not claim complete accident prevention."
    },
    {
      "termId": "v2g",
      "acronym": "V2G",
      "fullNameEn": "Vehicle-to-Grid",
      "fullNameZh": "車輛對電網",
      "fullNameJa": "車両から電力網への給電",
      "definitionEn": "A bidirectional charging concept in which suitable electric vehicles can send electricity back to the grid.",
      "definitionZh": "讓車輛電池在受控條件下與電網雙向互動，可能支援削峰、備援或能源管理。",
      "definitionJa": "車両バッテリーを制御された条件で電力網と双方向につなぎ、ピーク抑制、バックアップ、エネルギー管理に活用する考え方。",
      "planningRelevanceEn": "Relevant to depot fleets, buses, energy management, and future fleet-asset models.",
      "planningRelevanceZh": "在商用車規劃中需同時評估車隊排程、電池健康、電價、契約與場站設備。",
      "planningRelevanceJa": "商用車計画では、車両運用、バッテリー状態、電力料金、契約、拠点設備を合わせて確認する必要があります。",
      "sourceCategory": "DOE / bidirectional charging",
      "sourceNote": "Requires infrastructure, grid rules, and business-case validation."
    },
    {
      "termId": "v2x",
      "acronym": "V2X",
      "fullNameEn": "Vehicle-to-Everything",
      "fullNameZh": "車聯網通訊",
      "fullNameJa": "車両と周辺環境の通信",
      "definitionEn": "Communication between a vehicle and other vehicles, infrastructure, road users, networks, or devices.",
      "definitionZh": "車輛與其他車輛、道路設施、行人裝置或雲端系統交換資訊的通訊概念。",
      "definitionJa": "車両が他車、道路設備、歩行者端末、クラウドシステムと情報を交換する通信概念。",
      "planningRelevanceEn": "Useful for safety, traffic coordination, closed-site logistics, and future automation scenarios.",
      "planningRelevanceZh": "需要評估通訊標準、基礎設施、資料治理、法規與使用者教育成熟度。",
      "planningRelevanceJa": "通信標準、インフラ、データガバナンス、法規、利用者教育の成熟度を確認する必要があります。",
      "sourceCategory": "mobility communications",
      "sourceNote": "Standards, spectrum, and deployment conditions require verification."
    },
    {
      "termId": "fms",
      "acronym": "FMS",
      "fullNameEn": "Fleet Management System",
      "fullNameZh": "車隊管理系統",
      "fullNameJa": "フリート管理システム",
      "definitionEn": "A digital system for monitoring fleet utilization, maintenance, routes, driver behavior, and operating costs.",
      "definitionZh": "整合車輛位置、里程、維修、駕駛行為、能耗與任務資料的營運管理平台。",
      "definitionJa": "車両位置、走行距離、整備、運転行動、エネルギー消費、業務データを統合する運用管理プラットフォーム。",
      "planningRelevanceEn": "Connects vehicle hardware to data services, uptime planning, and after-sales strategy.",
      "planningRelevanceZh": "協助規劃連網服務、維修支援、客戶報表與經銷商教育內容。",
      "planningRelevanceJa": "コネクテッドサービス、整備支援、顧客レポート、販売店教育の設計に役立ちます。",
      "sourceCategory": "fleet operations",
      "sourceNote": "Definitions should be localized to the operating context."
    },
    {
      "termId": "soh",
      "acronym": "SOH",
      "fullNameEn": "State of Health",
      "fullNameZh": "電池健康狀態",
      "fullNameJa": "バッテリー健全度",
      "definitionEn": "A metric describing the condition or remaining performance capability of a battery compared with its original state.",
      "definitionZh": "用來描述電池相對於初始狀態的容量、阻抗、衰退與可用性的指標。",
      "definitionJa": "初期状態に対する容量、抵抗、劣化、利用可能性を示すバッテリー状態の指標。",
      "planningRelevanceEn": "Important for range, warranty, residual value, replacement timing, and BEV confidence.",
      "planningRelevanceZh": "影響殘值、保固、充電策略、維修規劃與二手車或梯次利用判斷。",
      "planningRelevanceJa": "残価、保証、充電戦略、整備計画、中古車や二次利用の判断に影響します。",
      "sourceCategory": "battery / EV operations",
      "sourceNote": "Exact calculation depends on BMS and manufacturer methodology."
    },
    {
      "termId": "esg",
      "acronym": "ESG",
      "fullNameEn": "Environmental, Social, and Governance",
      "fullNameZh": "環境、社會與公司治理",
      "fullNameJa": "環境・社会・ガバナンス",
      "definitionEn": "A framework for evaluating environmental impact, social responsibility, and governance practices.",
      "definitionZh": "用來描述企業在環境、社會責任與治理面向的管理與揭露框架。",
      "definitionJa": "企業の環境、社会、ガバナンスに関する管理と開示の枠組みを示す考え方。",
      "planningRelevanceEn": "Connects fleet decarbonization, customer procurement, policy signals, and reporting needs.",
      "planningRelevanceZh": "在商用車策略中常連到碳盤查、能源轉型、合規溝通與客戶永續報告需求。",
      "planningRelevanceJa": "商用車戦略では、炭素会計、エネルギー転換、コンプライアンス説明、顧客のサステナビリティ報告と結び付きます。",
      "sourceCategory": "corporate sustainability",
      "sourceNote": "Carbon calculations require verified emission factors."
    },
    {
      "termId": "poc",
      "acronym": "PoC",
      "fullNameEn": "Proof of Concept",
      "fullNameZh": "概念驗證",
      "fullNameJa": "概念実証",
      "definitionEn": "A limited trial used to test whether a concept is feasible under defined conditions.",
      "definitionZh": "在有限範圍中測試技術、營運流程或商業假設是否可行。",
      "definitionJa": "限定された範囲で技術、運用手順、事業仮説の実現性を確認する取り組み。",
      "planningRelevanceEn": "Useful for BEV route trials, connected fleet services, ADAS education, and logistics automation.",
      "planningRelevanceZh": "適合在正式導入前驗證路線、場站、資料品質、服務能力與客戶接受度。",
      "planningRelevanceJa": "正式導入前に、ルート、拠点、データ品質、サービス体制、顧客受容性を確認する場面に適しています。",
      "sourceCategory": "business / innovation management",
      "sourceNote": "PoC results should not be generalized without validation."
    },
    {
      "termId": "odd",
      "acronym": "ODD",
      "fullNameEn": "Operational Design Domain",
      "fullNameZh": "運行設計領域",
      "fullNameJa": "運行設計領域",
      "definitionEn": "The conditions under which an automated or assisted driving system is designed to operate.",
      "definitionZh": "定義自動化或輔助系統可被設計使用的道路、天候、速度、交通與營運條件。",
      "definitionJa": "自動化または支援システムが設計上使用できる道路、天候、速度、交通、運用条件を定める範囲。",
      "planningRelevanceEn": "Critical for automation claims, closed-site logistics, safety boundaries, and customer education.",
      "planningRelevanceZh": "可避免把特定條件下的功能誤解為任何場景都可使用。",
      "planningRelevanceJa": "特定条件下の機能を、あらゆる場面で使えるものと誤解しないために重要です。",
      "sourceCategory": "automated driving standards",
      "sourceNote": "Use SAE, ISO, or UNECE references where formal precision is required."
    },
    {
      "termId": "ota",
      "acronym": "OTA",
      "fullNameEn": "Over-the-Air",
      "fullNameZh": "空中軟體更新",
      "fullNameJa": "無線ソフトウェア更新",
      "definitionEn": "A method for delivering software updates or data to a vehicle through wireless communication.",
      "definitionZh": "透過網路將軟體更新傳送到車輛或設備，減少部分現場維護需求。",
      "definitionJa": "ネットワーク経由で車両や機器へソフトウェア更新を配信し、一部の現地作業を減らす仕組み。",
      "planningRelevanceEn": "Relevant to connected services, feature maintenance, cybersecurity, and customer support.",
      "planningRelevanceZh": "需要建立版本控管、資安、客戶告知、失敗回復與服務流程。",
      "planningRelevanceJa": "バージョン管理、セキュリティ、顧客通知、失敗時の復旧、サービス手順が必要です。",
      "sourceCategory": "connected vehicle operations",
      "sourceNote": "Cybersecurity, warranty, and approval processes must be verified."
    },
    {
      "termId": "kpi",
      "acronym": "KPI",
      "fullNameEn": "Key Performance Indicator",
      "fullNameZh": "關鍵績效指標",
      "fullNameJa": "重要業績評価指標",
      "definitionEn": "A measurable indicator used to evaluate progress against a defined objective.",
      "definitionZh": "用來追蹤策略、營運或服務成果是否接近目標的可衡量指標。",
      "definitionJa": "戦略、運用、サービス成果が目標に近づいているかを測るための指標。",
      "planningRelevanceEn": "Keeps roadmap, education, PoC, and service initiatives measurable.",
      "planningRelevanceZh": "可把節能、稼動率、服務回應、資料品質與客戶體驗轉成可討論的企劃標準。",
      "planningRelevanceJa": "省エネ、稼働率、サービス対応、データ品質、顧客体験を企画上の評価基準に変換できます。",
      "sourceCategory": "business management",
      "sourceNote": "KPI definitions should align with the stakeholder decision context."
    },
    {
      "termId": "oem",
      "acronym": "OEM",
      "fullNameEn": "Original Equipment Manufacturer",
      "fullNameZh": "原廠製造商",
      "fullNameJa": "完成車メーカー",
      "definitionEn": "A manufacturer that produces vehicles or equipment sold under its own brand or supplied to another company.",
      "definitionZh": "負責車輛或主要系統設計、製造、認證與產品責任的原始製造商。",
      "definitionJa": "車両や主要システムの設計、製造、認証、製品責任を担うメーカー。",
      "planningRelevanceEn": "Clarifies the boundary between manufacturer capability, distributor role, and local market execution.",
      "planningRelevanceZh": "在公開作品中只能作為產業角色描述，不應造成官方系統或授權代表的誤解。",
      "planningRelevanceJa": "公開ポートフォリオでは業界上の役割説明に限り、公式システムや権限ある代表と誤解されない表現が必要です。",
      "sourceCategory": "automotive industry",
      "sourceNote": "Do not imply official representation unless verified."
    },
    {
      "termId": "dealer",
      "acronym": "Dealer",
      "fullNameEn": "Authorized Sales and Service Channel",
      "fullNameZh": "經銷商",
      "fullNameJa": "販売店",
      "definitionEn": "A channel that sells and services vehicles under an authorization or distribution arrangement.",
      "definitionZh": "與客戶接觸、銷售車輛、提供初步說明、服務協調與在地支援的通路角色。",
      "definitionJa": "顧客接点、車両販売、初期説明、サービス調整、地域支援を担うチャネル上の役割。",
      "planningRelevanceEn": "Important for customer education, after-sales readiness, and service implementation.",
      "planningRelevanceZh": "未來移動方案需要把產品知識、風險溝通、客戶訪談與售後服務轉成可教育內容。",
      "planningRelevanceJa": "将来モビリティでは、商品知識、リスク説明、顧客ヒアリング、アフターサービスを教育内容に落とし込む必要があります。",
      "sourceCategory": "dealer operations",
      "sourceNote": "Use generic wording; do not reference real dealer marks."
    },
    {
      "termId": "distributor",
      "acronym": "Distributor",
      "fullNameEn": "Local Import, Wholesale, or Agency Channel",
      "fullNameZh": "代理商",
      "fullNameJa": "代理店",
      "definitionEn": "An organization that coordinates local import, wholesale, agency, market support, or channel operations.",
      "definitionZh": "負責市場導入、通路協調、產品資訊傳遞與區域營運支援的商業角色。",
      "definitionJa": "市場導入、チャネル調整、商品情報の伝達、地域運営支援を担うビジネス上の役割。",
      "planningRelevanceEn": "Connects product planning with market intelligence, channel education, and local business execution.",
      "planningRelevanceZh": "需要在品牌安全邊界內討論策略，不應呈現為官方內部系統。",
      "planningRelevanceJa": "ブランド安全の範囲内で戦略を扱い、公式の社内システムのように見せないことが重要です。",
      "sourceCategory": "distribution strategy",
      "sourceNote": "Keep role descriptions generic in public portfolio material."
    },
    {
      "termId": "ai-governance",
      "acronym": "AI Governance",
      "fullNameEn": "AI Governance",
      "fullNameZh": "人工智慧治理",
      "fullNameJa": "AIガバナンス",
      "definitionEn": "Policies and practices that guide responsible AI use, including data quality, human review, limitations, security, and accountability.",
      "definitionZh": "管理 AI 使用目的、資料來源、偏誤、可解釋性、人為審核與責任邊界的制度與流程。",
      "definitionJa": "AI の利用目的、データソース、偏り、説明可能性、人による確認、責任範囲を管理する制度と手順。",
      "planningRelevanceEn": "Keeps AI-assisted planning outputs framed as support material rather than verified business decisions.",
      "planningRelevanceZh": "在策略模擬中應清楚標示 demo 假設、資料限制與需要人工審核的結論。",
      "planningRelevanceJa": "戦略シミュレーションでは、demo 仮定、データ制約、人による確認が必要な結論を明示する必要があります。",
      "sourceCategory": "AI workflow governance",
      "sourceNote": "Human review is required before public or business use."
    },
    {
      "termId": "l4",
      "acronym": "Level 4",
      "fullNameEn": "SAE Level 4 Automated Driving",
      "fullNameZh": "第四級自動駕駛",
      "fullNameJa": "レベル4自動運転",
      "definitionEn": "An automated driving level in which the system can perform the driving task within a defined operational design domain without expecting the driver to take over.",
      "definitionZh": "在限定運行設計領域內，系統可負責動態駕駛任務；超出條件時仍需依設計處理。",
      "definitionJa": "限定された運行設計領域内で、システムが動的運転タスクを担う自動運転レベル。",
      "planningRelevanceEn": "Useful for discussing closed-site logistics automation, but claims must specify the operating domain and safety boundary.",
      "planningRelevanceZh": "商用車策略應把 L4 放在特定場域、法規、責任、保險與服務能力成熟後再評估。",
      "planningRelevanceJa": "商用車戦略では、特定エリア、法規、責任、保険、サービス体制が成熟した条件で検討すべき項目です。",
      "sourceCategory": "automated driving standards",
      "sourceNote": "Use formal SAE or local regulatory references before making precise public claims."
    },
    {
      "termId": "carbon-accounting",
      "acronym": "Carbon Accounting",
      "fullNameEn": "Carbon Accounting",
      "fullNameZh": "碳盤查",
      "fullNameJa": "炭素会計",
      "definitionEn": "A method for organizing activity data, emission factors, boundaries, and calculations to estimate greenhouse-gas emissions.",
      "definitionZh": "依明確邊界、活動資料與排放係數計算並揭露排放量的方法。",
      "definitionJa": "明確な境界、活動データ、排出係数に基づいて排出量を算定し開示する方法。",
      "planningRelevanceEn": "Supports fleet ESG discussion, but factors, boundaries, and assumptions must be traceable before formal reporting.",
      "planningRelevanceZh": "商用車頁面只能用於說明估算邏輯；正式揭露需採用企業核准方法與最新係數。",
      "planningRelevanceJa": "このサイトでは推計ロジックの説明に限ります。正式開示には企業承認済みの方法と最新係数が必要です。",
      "sourceCategory": "corporate sustainability",
      "sourceNote": "Demo calculations must not be presented as verified emissions reporting."
    },
    {
      "termId": "co2",
      "acronym": "CO2",
      "fullNameEn": "Carbon Dioxide",
      "fullNameZh": "二氧化碳",
      "fullNameJa": "二酸化炭素",
      "definitionEn": "A greenhouse gas commonly used as a core reference in fleet emission discussions. Formal reporting often uses CO2e to include other greenhouse gases.",
      "definitionZh": "常用於溫室氣體與能源轉型討論的排放指標之一，正式揭露通常會轉換為二氧化碳當量。",
      "definitionJa": "温室効果ガスやエネルギー転換の議論で使われる代表的な排出指標の一つ。正式開示では二酸化炭素換算量として扱われることがあります。",
      "planningRelevanceEn": "Helps structure carbon-estimation fields, but verified emission factors, activity data, and accounting boundaries are required before formal claims.",
      "planningRelevanceZh": "提醒碳估算必須確認燃料、電力係數、再生能源比例、里程、載重與盤查方法。",
      "planningRelevanceJa": "炭素推計には、燃料、電力係数、再生可能電力比率、走行距離、積載、算定方法の確認が必要です。",
      "sourceCategory": "corporate sustainability",
      "sourceNote": "Use CO2 or CO2e carefully and define the accounting method before reporting."
    }
  ],
  "data/i18n.json": {
    "zh": {
      "accessibility.skipToContent": "跳到主要內容",
      "site.title": "商用車未來移動與新能源策略實驗室",
      "site.prototypeLabel": "作品集策略原型",
      "nav.toggle": "開啟或關閉主選單",
      "nav.home": "首頁",
      "nav.trendRadar": "趨勢雷達",
      "nav.maturityMap": "技術成熟度地圖",
      "nav.scenarioSimulator": "情境模擬器",
      "nav.energyRoadmap": "能源路線圖",
      "nav.safetyAdas": "安全與 ADAS 實驗室",
      "nav.connectedFleet": "車聯網實驗室",
      "nav.esgPolicy": "ESG 與政策",
      "nav.roadmapStudio": "策略路線圖",
      "nav.glossary": "詞彙表",
      "home.label": "商用車策略實驗室",
      "home.title": "商用車未來移動與新能源策略實驗室",
      "home.subtitle": "以靜態作品集原型展示商用車商品企劃如何整合能源轉型、車聯網、安全教育、ESG 訊號與 2026 至 2035 策略路線圖。",
      "home.ctaPrimary": "查看策略模組",
      "home.ctaSecondary": "查看治理規則",
      "home.legalNotice": "著作權所有 © 2026 張義豊(Yi-Li, Chang) 保留所有權利。",
      "home.creativeMotivation.title": "創作動機",
      "home.creativeMotivation.label": "首頁限定說明",
      "home.creativeMotivation.body": "這個實驗室把未來移動訊號轉成商用車商品企劃工具，連結台灣營運場景、能源轉型、人本物流、安全、車聯網、ESG 與負責任的 AI 策略思考。",
      "home.guardrailDemo": "示範資料",
      "home.guardrailHypothesis": "企劃假設",
      "home.guardrailReview": "需人工審查",
      "home.systemTitle": "策略運作模型",
      "home.systemYears": "2026-2035",
      "home.systemPreviewAria": "開啟策略運作模型預覽",
      "home.systemPreviewCloseAria": "關閉策略運作模型預覽",
      "system.customerMission": "客戶任務",
      "system.energy": "能源路徑",
      "system.safety": "安全教育",
      "system.fleetData": "車隊資料",
      "system.esg": "ESG 訊號",
      "system.roadmap": "路線圖時程",
      "governance.label": "全域運作規則",
      "governance.title": "具備 demo 資料紀律的靜態作品集架構",
      "governance.body": "網站會區分策略假設與已驗證事實，清楚標示示範資料，並避免任何官方品牌混淆。",
      "governance.i18n.title": "三語 UI",
      "governance.i18n.body": "所有公開標籤、控制項、圖表說明、免責文字與詞彙說明都由語系鍵值管理。",
      "governance.theme.title": "四套主題",
      "governance.theme.body": "主題切換使用穩定的 body 主題 token，不重置內容或互動狀態。",
      "governance.disclaimer.title": "示範資料優先",
      "governance.disclaimer.body": "分數與情境皆為示意，除非來源登錄表明確支持該項主張。",
      "modules.label": "策略介面",
      "modules.title": "已準備好承接後續深度內容的模組骨架",
      "modules.body": "每個模組都繼承相同的語系、主題、詞彙、影像治理與寫作防護系統。",
      "module.link": "定位到此模組",
      "module.trend.category": "訊號排序",
      "module.trend.title": "趨勢雷達",
      "module.trend.body": "以商品企劃條件比較 BEV、FCEV、ADAS、車聯網、V2G、物流自動化與 ESG 訊號。",
      "module.trend.details": "優先度分數在加入來源支持與台灣情境驗證之前，必須維持示範資料標示。",
      "module.maturity.category": "成熟度地圖",
      "module.maturity.title": "技術成熟度地圖",
      "module.maturity.body": "依成熟度、商品企劃價值、成本、法規風險、服務準備度與通路教育需求定位技術。",
      "module.scenario.category": "客戶情境",
      "module.scenario.title": "情境模擬器",
      "module.scenario.body": "把路線、里程、載重、充電條件、停工敏感度與 ESG 壓力轉換成策略建議。",
      "module.energy.category": "動力路徑",
      "module.energy.title": "能源路線圖",
      "module.energy.body": "在路線與基礎設施限制下比較柴油、油電、BEV、FCEV、場站充電、電池 SOH 與 V2G。",
      "module.adas.category": "安全教育",
      "module.adas.title": "安全與 ADAS 實驗室",
      "module.adas.body.before": "將",
      "module.adas.body.after": "功能轉化為謹慎的客戶教育、系統限制說明與通路訓練素材。",
      "module.fleet.category": "服務模式",
      "module.fleet.title": "車聯網與 AI 車隊實驗室",
      "module.fleet.body.before": "連結",
      "module.fleet.body.after": "遠端診斷、預測維修、路線最佳化、妥善率與服務企劃。",
      "module.esg.category": "政策訊號",
      "module.esg.title": "ESG 與政策儀表板",
      "module.esg.body": "與政策訊號是需要最新來源驗證的企劃輸入。",
      "module.roadmap.category": "2026-2035 時程",
      "module.roadmap.title": "策略路線圖工作室",
      "module.roadmap.body": "把近期教育、中期 PoC、長期追蹤與暫緩技術整理成商品企劃路線圖。",
      "control.clusterLabel": "浮動控制",
      "control.language": "語言",
      "control.theme": "主題",
      "control.toc": "目錄",
      "control.seeMore": "查看更多",
      "control.showLess": "收合",
      "theme.a": "主題 A｜溫暖學院",
      "theme.b": "主題 B｜晨光移動",
      "theme.c": "主題 C｜人本服務移動",
      "theme.d": "主題 D｜安靜治理",
      "toc.home": "首頁",
      "toc.creativeMotivation": "創作動機",
      "toc.governance": "治理規則",
      "toc.modules": "策略模組",
      "toc.trendRadar": "趨勢雷達",
      "toc.maturityMap": "技術成熟度地圖",
      "toc.scenarioSimulator": "情境模擬器",
      "toc.energyRoadmap": "能源路線圖",
      "toc.safetyAdas": "安全與 ADAS",
      "toc.connectedFleet": "車聯網",
      "toc.esgPolicy": "ESG 與政策",
      "toc.roadmapStudio": "策略路線圖",
      "toc.glossary": "詞彙表",
      "toc.downloads": "參考文件",
      "glossary.label": "共用術語",
      "glossary.title": "詞彙 popup 行為骨架",
      "glossary.body": "ADAS、BEV、FCEV、TCO、V2G、ODD 等縮寫會開啟在地化定義與企劃關聯說明。",
      "glossary.openTerm": "開啟詞彙說明",
      "glossary.close": "關閉詞彙說明",
      "glossary.sourceCategory": "來源類型",
      "glossary.planningRelevance": "商品企劃關聯",
      "glossary.sourceNote": "來源備註",
      "downloads.label": "參考備註",
      "downloads.title": "靜態文件",
      "downloads.body": "這些文件支援示範資料與限制條件的透明說明。",
      "downloads.dataDisclaimer": "資料免責聲明",
      "downloads.assumptions": "假設與限制",
      "trend.openModule": "開啟趨勢雷達",
      "trend.label": "訊號優先排序",
      "trend.title": "趨勢雷達",
      "trend.subtitle": "以商品企劃條件比較未來商用移動訊號；它用來排序策略注意力，不是預測單一贏家。",
      "trend.demoLabel": "示範假設資料",
      "trend.taiwanCaveat": "國際訊號需經台灣市場驗證。",
      "trend.selectedLabel": "目前選取訊號",
      "trend.loading": "載入趨勢資料",
      "trend.loadingBody": "正在讀取示範假設與評分模型。",
      "trend.actionsTitle": "建議下一步",
      "trend.methodLabel": "方法",
      "trend.methodTitle": "加權企劃分數",
      "trend.methodBody": "優先度分數加權比較市場相關性、技術成熟度、成本可行性、法規成熟度、客戶痛點吻合度、經銷教育價值與策略差異化。",
      "trend.radarTitle": "選取訊號雷達圖",
      "trend.bubbleTitle": "成熟度泡泡圖",
      "trend.bubbleLegend": "泡泡圖訊號索引",
      "trend.heatTitle": "風險與成熟度熱區表",
      "trend.timelineTitle": "2026 到 2035 訊號時間軸",
      "trend.svgLabel": "SVG",
      "trend.tableLabel": "表格",
      "trend.htmlLabel": "HTML",
      "trend.sourceLimitTitle": "來源限制說明",
      "trend.sourceLimitBody": "這些分數是把提案內容轉為示範假設。取得在地驗證資料後，應重新校準或替換。",
      "trend.writingGuardTitle": "寫作護欄",
      "trend.writingGuardBody": "雷達比較的是企劃注意力，不宣稱某項技術必然勝出，也不假設所有車隊都應採取相同路徑。",
      "trend.metric.market": "市場相關性",
      "trend.metric.tech": "技術成熟度",
      "trend.metric.cost": "成本可行性",
      "trend.metric.regulation": "法規成熟度",
      "trend.metric.customer": "客戶痛點吻合度",
      "trend.metric.dealer": "經銷教育價值",
      "trend.metric.differentiation": "策略差異化",
      "trend.metricShort.market": "市場",
      "trend.metricShort.tech": "技術",
      "trend.metricShort.cost": "成本",
      "trend.metricShort.regulation": "法規",
      "trend.metricShort.customer": "痛點",
      "trend.metricShort.dealer": "教育",
      "trend.metricShort.differentiation": "差異",
      "trend.scoreLabel": "優先度",
      "trend.confidenceLabel": "資料信心",
      "trend.riskLabel": "風險",
      "trend.radarSummary": "{trend} 的優先度為 {score}；目前最高分構面是 {metric}，分數 {value}。",
      "trend.bubbleSummary": "目前篩選中，{trend} 的優先度最高，分數 {score}。",
      "trend.heatSummary": "此表比較 {count} 個訊號；其中 {highRisk} 個列為高風險，需要更強的在地驗證。",
      "trend.timelineSummary": "時間軸顯示 {total} 個訊號，其中 {nearTerm} 個可在 2026 或 2027 年開始企劃準備。",
      "trend.noData": "此分類目前沒有趨勢資料。",
      "trend.loadError": "無法載入趨勢資料。",
      "trend.table.signal": "訊號",
      "trend.category.all": "全部訊號",
      "trend.category.energy_transition": "能源轉型",
      "trend.category.infrastructure": "基礎建設",
      "trend.category.safety": "安全教育",
      "trend.category.data_services": "資料服務",
      "trend.category.policy_esg": "ESG 與政策",
      "trend.category.automation": "物流自動化",
      "trend.category.energy_services": "能源服務",
      "trend.category.business_model": "服務化模式",
      "trend.status.near_term_poc": "近期 PoC 候選",
      "trend.status.foundation_enabler": "基礎能力優先",
      "trend.status.education_now": "立即教育",
      "trend.status.service_package": "服務包設計",
      "trend.status.transition_support": "過渡支援",
      "trend.status.guarded_experiment": "有護欄實驗",
      "trend.status.monitor_and_frame": "監測並建立框架",
      "trend.status.controlled_poc": "受控 PoC",
      "trend.status.long_term_watch": "長期觀測",
      "trend.status.scenario_watch": "情境追蹤",
      "trend.status.business_design": "商業設計",
      "trend.risk.low": "低",
      "trend.risk.medium": "中",
      "trend.risk.high": "高",
      "maturity.openModule": "開啟技術成熟度地圖",
      "maturity.label": "成熟度決策地圖",
      "maturity.title": "技術成熟度地圖",
      "maturity.subtitle": "把未來移動技術分成近期教育、PoC 規劃、長期追蹤與延後觀測，避免討論只停在流行詞清單。",
      "maturity.demoLabel": "示範假設資料",
      "maturity.caveat": "適用性取決於路線、載重、基礎建設、服務準備度、法規、成本成熟度與通路教育。",
      "maturity.selectedLabel": "目前選取技術",
      "maturity.loading": "載入技術資料",
      "maturity.loadingBody": "正在讀取示範假設與成熟度模型。",
      "maturity.methodLabel": "閱讀方式",
      "maturity.methodTitle": "四象限企劃邏輯",
      "maturity.methodBody": "成熟度與商品企劃價值決定象限；成本影響泡泡大小，風險顏色提示哪裡需要更謹慎的驗證與教育。",
      "maturity.chartTitle": "技術成熟度四象限地圖",
      "maturity.cardsTitle": "技術卡片",
      "maturity.keyboardLabel": "支援鍵盤操作",
      "maturity.scenarioTitle": "適用情境",
      "maturity.disclaimerTitle": "示範資料邊界",
      "maturity.disclaimerBody": "分數是示範用企劃假設。正式商業使用前，應以在地驗證資料重新校準。",
      "maturity.guardrailTitle": "寫作護欄",
      "maturity.guardrailBody": "地圖避免通用好壞判斷。只有當客戶任務、基礎建設、服務網、法規、成本成熟度與通路教育同步到位時，技術才更適合。",
      "maturity.legendTitle": "圖例",
      "maturity.legendCost": "泡泡越大代表導入成本越高",
      "maturity.chartSummary": "目前檢視 {total} 項技術：{near} 項適合近期教育，{poc} 項適合 PoC 規劃，{track} 項需長期追蹤，{defer} 項建議延後觀測。",
      "maturity.loadError": "無法載入技術成熟度資料。",
      "maturity.metric.maturity": "技術成熟度",
      "maturity.metric.value": "商品企劃價值",
      "maturity.metric.cost": "導入成本",
      "maturity.metric.regulationRisk": "法規風險",
      "maturity.metric.dealerTraining": "通路教育難度",
      "maturity.metric.serviceReadiness": "服務準備度",
      "maturity.metricShort.maturity": "成熟度",
      "maturity.metricShort.value": "企劃價值",
      "maturity.metricShort.cost": "成本",
      "maturity.metricShort.service": "服務",
      "maturity.axis.maturity": "技術成熟度",
      "maturity.axis.value": "商品企劃價值",
      "maturity.riskLabel": "風險",
      "maturity.risk.low": "低風險",
      "maturity.risk.medium": "中風險",
      "maturity.risk.high": "高風險",
      "maturity.status.all": "全部狀態",
      "maturity.status.near_term_education": "近期教育",
      "maturity.status.poc_planning": "PoC 規劃",
      "maturity.status.long_term_tracking": "長期追蹤",
      "maturity.status.deferred_observation": "延後觀測",
      "maturity.category.energy_transition": "能源轉型",
      "maturity.category.infrastructure": "基礎建設",
      "maturity.category.safety": "安全教育",
      "maturity.category.data_services": "資料服務",
      "maturity.category.automation": "物流自動化",
      "maturity.category.energy_services": "能源服務",
      "maturity.category.policy_esg": "ESG 與政策",
      "footer.disclaimer": "個人作品集原型。僅使用示範資料。不代表 Toyota、HINO、和泰、經銷商、客戶或政府機關的官方背書。",
      "scenario.openModule": "開啟情境模擬器",
      "scenario.label": "客戶情境模擬",
      "scenario.title": "Scenario Simulator 情境模擬器",
      "scenario.subtitle": "用客戶任務、路線、能源條件與營運敏感度，整理教育、PoC、長期追蹤與暫緩觀察的策略層次。",
      "scenario.demoDataset": "Demo Dataset",
      "scenario.prototypeSimulation": "Prototype Simulation",
      "scenario.humanReviewRequired": "Human Review Required",
      "scenario.boundaryTitle": "使用邊界",
      "scenario.boundaryBody": "本模擬器僅為作品集展示，不是官方採購、工程、法務或產品上市建議工具。",
      "scenario.presetTitle": "選擇客戶情境",
      "scenario.inputsTitle": "調整營運條件",
      "scenario.outputsTitle": "策略輸出",
      "scenario.selectedScenario": "目前情境",
      "scenario.recommendationLayers": "四層策略建議",
      "scenario.flowTitle": "策略流向",
      "scenario.flowSummary": "目前情境為 {scenario}，風險等級為 {risk}。系統整理出近期教育 {near} 項、中期 PoC {medium} 項、長期追蹤 {long} 項、暫緩技術 {deferred} 項。",
      "scenario.matrixTitle": "情境條件矩陣",
      "scenario.keyboardLabel": "支援鍵盤與點選",
      "scenario.layer.near": "近期教育主題",
      "scenario.layer.medium": "中期 PoC 候選",
      "scenario.layer.long": "長期追蹤技術",
      "scenario.layer.deferred": "暫緩觀察技術",
      "scenario.layer.near.short": "教育",
      "scenario.layer.medium.short": "PoC",
      "scenario.layer.long.short": "追蹤",
      "scenario.layer.deferred.short": "暫緩",
      "scenario.reasoningTitle": "產品規劃推理",
      "scenario.dealerEducationTitle": "經銷教育建議",
      "scenario.interviewQuestionsTitle": "客戶訪談問題",
      "scenario.dataGapsTitle": "資料缺口",
      "scenario.humanReviewTitle": "人工覆核提醒",
      "scenario.input.route_type": "路線型態",
      "scenario.input.annual_mileage": "年度里程",
      "scenario.input.payload_level": "載重層級",
      "scenario.input.depot_charging": "回場充電條件",
      "scenario.input.downtime_sensitivity": "停工敏感度",
      "scenario.input.esg_pressure": "ESG 壓力",
      "scenario.input.regulation_exposure": "法規暴露度",
      "scenario.input.infrastructure_readiness": "基礎設施成熟度",
      "scenario.option.urban_fixed": "市區固定路線",
      "scenario.option.regional_mixed": "區域混合路線",
      "scenario.option.site_variable": "工地變動路線",
      "scenario.option.long_haul": "長途幹線",
      "scenario.option.mixed_portfolio": "混合車隊",
      "scenario.option.closed_site": "封閉場域",
      "scenario.option.low": "低",
      "scenario.option.medium": "中",
      "scenario.option.high": "高",
      "scenario.option.very_high": "非常高",
      "scenario.option.critical": "關鍵",
      "scenario.option.available": "可用",
      "scenario.option.partial": "部分可用",
      "scenario.option.limited": "受限",
      "scenario.option.light": "輕載",
      "scenario.option.heavy": "重載",
      "scenario.option.passenger": "載客",
      "scenario.option.mixed": "混合",
      "scenario.riskTitle": "原型風險讀數",
      "scenario.risk.low": "低風險",
      "scenario.risk.medium": "中風險",
      "scenario.risk.high": "高風險",
      "scenario.noRecommendations": "目前條件沒有額外建議，請先檢查資料缺口。",
      "scenario.loadError": "情境模擬資料暫時無法載入。",
      "scenario.termLabel": "關鍵術語",
      "scenario.conditionsTitle": "目前輸入條件",
      "scenario.noLogoPolicyTitle": "無標誌視覺政策",
      "scenario.noLogoPolicyBody": "此模擬器只使用抽象流程與示意圖，不使用真實品牌標誌、車牌、客戶名稱或官方視覺。",
      "scenario.disclaimerTitle": "Demo 資料邊界",
      "scenario.disclaimerBody": "所有輸出都是靜態 demo 假設，正式使用前需以現行法規、車輛規格、能源價格、路線資料與通路能力重新驗證。",
      "scenario.resetPreset": "套用此情境",
      "energy.openModule": "開啟能源路線圖",
      "energy.label": "能源策略路線圖",
      "energy.title": "Energy Roadmap 能源路線圖",
      "energy.subtitle": "以 2026-2035 的產品規劃視角，比較柴油、油電、BEV、FCEV、V2G 與場站能源管理的條件、風險與時程。",
      "energy.demoLabel": "Demo assumptions",
      "energy.caveat": "能源路徑取決於路線、里程、載重、補能基礎設施、服務網絡、政策與 TCO 交叉條件。",
      "energy.boundaryTitle": "使用邊界",
      "energy.controlsTitle": "調整能源條件",
      "energy.powertrainTitle": "選擇能源路徑",
      "energy.selectedLabel": "目前能源路徑",
      "energy.fitScore": "適配分數",
      "energy.serviceReadiness": "服務成熟度",
      "energy.residualWatch": "殘值觀察",
      "energy.timelineTitle": "2026-2035 能源時程",
      "energy.crossoverTitle": "TCO crossover 敏感度",
      "energy.depotTitle": "場站充電容量示意",
      "energy.sohTitle": "SOH 與殘值觀察",
      "energy.carbonTitle": "碳影響示意",
      "energy.dependenciesTitle": "關鍵依賴",
      "energy.risksTitle": "風險與延後條件",
      "energy.educationTitle": "經銷教育主題",
      "energy.suitabilityTitle": "客戶適用條件",
      "energy.timelineSummary": "路線圖把短期教育、中期 PoC、長期追蹤與暫緩觀察放在 2026 到 2035 年。已選擇 {name}，目前狀態為 {status}。",
      "energy.crossoverSummary": "Demo TCO 曲線顯示 {name} 在目前條件下的相對成本趨勢；若基礎設施或服務成熟度不足，交叉點會延後。",
      "energy.depotSummary": "場站容量示意把充電可用性、路線穩定度與年里程轉成 demo 負載，僅供產品規劃討論。",
      "energy.carbonSummary": "碳面板使用相對示意值，正式使用前需重新驗證邊界、活動數據與能源係數。",
      "energy.input.route_predictability": "路線可預測性",
      "energy.input.annual_mileage": "年度里程",
      "energy.input.payload_level": "載重層級",
      "energy.input.depot_charging": "場站充電可用性",
      "energy.input.energy_price_stability": "能源價格穩定度",
      "energy.input.service_readiness": "服務成熟度",
      "energy.input.esg_pressure": "ESG 壓力",
      "energy.input.policy_support": "政策支持度",
      "energy.option.low": "低",
      "energy.option.medium": "中",
      "energy.option.high": "高",
      "energy.option.very_high": "非常高",
      "energy.option.light": "輕載",
      "energy.option.heavy": "重載",
      "energy.option.passenger": "載客",
      "energy.option.limited": "受限",
      "energy.option.partial": "部分可用",
      "energy.option.available": "可用",
      "energy.status.short_term_education": "短期教育",
      "energy.status.medium_term_poc": "中期 PoC",
      "energy.status.long_term_tracking": "長期追蹤",
      "energy.status.deferred_observation": "暫緩觀察",
      "energy.segment.education": "教育",
      "energy.segment.poc": "PoC",
      "energy.segment.tracking": "追蹤",
      "energy.segment.defer": "暫緩",
      "energy.loadError": "能源路線圖資料暫時無法載入。",
      "energy.noLogoPolicyTitle": "無標誌視覺政策",
      "energy.noLogoPolicyBody": "能源圖表只使用抽象 SVG、卡片與示意數值，不使用真實品牌標誌、車牌、客戶或官方視覺。",
      "energy.disclaimerTitle": "Demo 資料邊界",
      "energy.disclaimerBody": "所有能源成本、碳影響、SOH、殘值與時程皆為靜態 demo 假設，正式使用前需以現行資料覆核。",
      "energy.keyboardLabel": "支援鍵盤與點選",
      "energy.svgLabel": "SVG",
      "energy.termLabel": "關鍵術語",
      "safety.openModule": "開啟安全與 ADAS 實驗室",
      "safety.label": "安全教育與風險溝通",
      "safety.title": "Safety & ADAS Lab 安全與 ADAS 實驗室",
      "safety.subtitle": "把 AEB、盲點偵測、環景、疲勞警示、V2X、駕駛行為分析與邊緣感測，轉化為產品規劃、經銷教育、客戶價值與限制溝通。",
      "safety.demoLabel": "Demo assumptions",
      "safety.caveat": "ADAS 是駕駛輔助，不是事故消除或自動駕駛承諾。功能適用性需依車型、場景、感測條件、駕駛教育與法規確認。",
      "safety.functionLibrary": "安全功能庫",
      "safety.selectedLabel": "目前安全功能",
      "safety.technicalFunction": "技術功能",
      "safety.customerValue": "客戶價值",
      "safety.driverEducationValue": "駕駛教育價值",
      "safety.vehicleSegments": "適用車型/客群",
      "safety.scenarios": "適用場景",
      "safety.limitations": "系統限制",
      "safety.doNotOverclaim": "不可過度宣稱",
      "safety.planningImplications": "產品規劃含意",
      "safety.dealerEducationMaterials": "經銷教育素材",
      "safety.customerFAQ": "客戶 FAQ",
      "safety.riskHeatMapTitle": "風險熱圖",
      "safety.riskHeatMapSummary": "{name} 的最高 demo 風險為 {metric}，分數 {score}。請把此分數視為教育與覆核優先順序，而不是安全性能認證。",
      "safety.risk.low": "低風險",
      "safety.risk.medium": "中風險",
      "safety.risk.high": "高風險",
      "safety.metric.overrelianceRisk": "過度依賴風險",
      "safety.metric.sensingBoundary": "感測邊界",
      "safety.metric.trainingNeed": "訓練需求",
      "safety.metric.dataGovernance": "資料治理",
      "safety.metric.scenarioComplexity": "情境複雜度",
      "safety.boundaryTitle": "使用邊界",
      "safety.loadError": "安全與 ADAS 資料暫時無法載入。",
      "safety.noLogoPolicyTitle": "無標誌視覺政策",
      "safety.noLogoPolicyBody": "本頁只使用抽象卡片與風險示意，不使用真實品牌標誌、車牌、客戶、官方圖像或事故場景渲染。",
      "safety.disclaimerTitle": "責任溝通邊界",
      "safety.disclaimerBody": "所有安全功能文字皆為 demo 教育稿，正式使用前需以實車規格、車主手冊、法規、測試資料與通路訓練內容覆核。",
      "safety.keyboardLabel": "支援鍵盤與點選",
      "safety.termLabel": "關鍵術語",
      "safety.faqQuestion": "問題",
      "safety.faqAnswer": "回答",
      "fleet.openModule": "開啟車聯網實驗室",
      "fleet.label": "車隊資料服務實驗室",
      "fleet.title": "Connected Fleet Lab 車聯網與車隊服務實驗室",
      "fleet.subtitle": "展示商用車產品規劃如何從硬體延伸到 FMS、遠端診斷、預測維修、妥善率支援、碳追蹤、營運效率與客戶報告。",
      "fleet.demoLabel": "Demo assumptions",
      "fleet.privacyCaveat": "本頁不收集、不傳送、不分析任何真實車輛或客戶資料；所有數值與流程皆為靜態 demo 假設。",
      "fleet.moduleLibrary": "車隊服務模組",
      "fleet.selectedLabel": "目前服務模組",
      "fleet.flowTitle": "Connected-fleet data flow",
      "fleet.flowSummary": "資料流從車輛訊號開始，經過資料整理、分析、服務行動、通路支援，最後輸出客戶報告。已選擇 {name}。",
      "fleet.dataInputs": "資料輸入",
      "fleet.customerValue": "客戶價值",
      "fleet.planningValue": "產品規劃價值",
      "fleet.serviceRequirements": "服務/治理需求",
      "fleet.riskNotes": "風險提醒",
      "fleet.dealerEducation": "經銷教育重點",
      "fleet.reportOutputs": "報告輸出",
      "fleet.governanceTitle": "隱私與資料治理提醒",
      "fleet.governanceBody": "任何正式 FMS 或車隊資料服務都需要客戶同意、資料欄位定義、保存期限、人工覆核、資安與通路責任分工。本網站不連接 API 或即時遙測。",
      "fleet.noLogoPolicyTitle": "無標誌視覺政策",
      "fleet.noLogoPolicyBody": "資料流只使用抽象節點與卡片，不使用真實品牌標誌、車牌、客戶名稱、車輛 ID 或官方介面截圖。",
      "fleet.disclaimerTitle": "Demo 資料邊界",
      "fleet.disclaimerBody": "所有 connected-fleet 模組內容皆為 demo 教育與規劃假設，正式商用前需以合約、法規、資安、客戶流程與通路能力覆核。",
      "fleet.maturity.near_term_education": "近期教育",
      "fleet.maturity.medium_term_poc": "中期 PoC",
      "fleet.maturity.long_term_tracking": "長期追蹤",
      "fleet.maturity.deferred_observation": "暫緩觀察",
      "fleet.risk.low": "低風險",
      "fleet.risk.medium": "中風險",
      "fleet.risk.high": "高風險",
      "fleet.riskScore": "治理風險分數",
      "fleet.loadError": "車聯網資料暫時無法載入。",
      "fleet.keyboardLabel": "支援鍵盤與點選",
      "fleet.termLabel": "關鍵術語",
      "fleet.svgLabel": "SVG",
      "esg.openModule": "開啟 ESG 與政策儀表板",
      "esg.label": "ESG、政策與碳追蹤",
      "esg.title": "ESG 與政策儀表板",
      "esg.subtitle": "把能源轉型、碳追蹤、柴油替代訊號、補助/政策監測、企業永續揭露與車隊減碳壓力轉成產品規劃輸入。",
      "esg.demoLabel": "Demo assumptions",
      "esg.verificationCaveat": "政策、補助與碳係數皆需最新來源驗證；本頁不提供法務、會計或正式揭露建議。",
      "esg.signalLibrary": "政策與碳訊號",
      "esg.selectedSignal": "目前訊號",
      "esg.carbonEstimator": "Demo 碳估算面板",
      "esg.controlsTitle": "估算條件",
      "esg.carbonSummary": "在 demo 條件下，柴油基準約 {baseline} tCO2e，替代組合約 {modeled} tCO2e，差異 {difference} tCO2e。這不是驗證減量。",
      "esg.policyTimeline": "2026-2035 監測時間線",
      "esg.actionRecommendations": "行動建議",
      "esg.sourceConfidence": "來源信心",
      "esg.updatePlaceholder": "更新日期占位",
      "esg.sourceStatus": "來源狀態",
      "esg.planningUse": "企劃用途",
      "esg.limitation": "限制提醒",
      "esg.actions": "建議行動",
      "esg.signalScore": "訊號分數",
      "esg.metric.policyReadiness": "政策準備度",
      "esg.metric.carbonInfluence": "碳影響度",
      "esg.metric.customerPressure": "客戶壓力",
      "esg.metric.dataReadiness": "資料準備度",
      "esg.input.annualMileage": "年行駛里程",
      "esg.input.dieselIntensity": "柴油使用強度",
      "esg.input.electricIntensity": "電耗強度",
      "esg.input.renewableShare": "再生能源比例",
      "esg.input.replacementShare": "替代比例",
      "esg.option.low": "低",
      "esg.option.medium": "中",
      "esg.option.high": "高",
      "esg.option.light": "輕載",
      "esg.option.heavy": "重載",
      "esg.option.efficient": "高效率",
      "esg.option.pilot": "試點",
      "esg.option.partial": "部分替代",
      "esg.option.focused": "集中替代",
      "esg.baselineDiesel": "柴油基準",
      "esg.modeledFleet": "替代組合",
      "esg.demoDifference": "Demo 差異",
      "esg.carbonWarning": "此估算使用 demo 係數；正式揭露需驗證燃料、電力係數、再生能源、任務循環、里程、載重與盤查方法。",
      "esg.confidence.low": "低信心",
      "esg.confidence.medium": "中信心",
      "esg.confidence.high": "高信心",
      "esg.status.latest_verification_required": "需最新驗證",
      "esg.status.demo_assumption": "Demo 假設",
      "esg.status.simulated_source": "模擬來源",
      "esg.status.source_placeholder": "來源占位",
      "esg.methodologyTitle": "寫作與盤查防護",
      "esg.methodologyBody": "本頁只說明機制與資料需求，不宣稱已驗證減量。正式使用前需由最新政策來源、企業盤查方法、法務/合規與人工覆核確認。",
      "esg.noLogoPolicyTitle": "無標誌視覺政策",
      "esg.noLogoPolicyBody": "儀表板只使用抽象卡片、SVG 與 demo 數據，不使用官方標誌、政府介面截圖、客戶名稱、車牌或真實排放報告。",
      "esg.disclaimerTitle": "Demo 資料邊界",
      "esg.disclaimerBody": "所有政策、補助、碳估算與報告需求皆為 demo 規劃素材，不能作為採購、法務、會計、合規或正式永續揭露依據。",
      "esg.keyboardLabel": "支援鍵盤與點選",
      "esg.termLabel": "關鍵術語",
      "esg.svgLabel": "SVG",
      "esg.loadError": "ESG 與政策資料暫時無法載入。",
      "downloads.proposal": "專案提案文件",
      "visual.dynamicModuleLabel": "互動視覺模組",
      "visual.expandImage": "放大圖片",
      "visual.lightboxAria": "放大圖片預覽",
      "visual.closeImage": "關閉放大圖片",
      "visual.maturityImageTitle": "技術成熟度規劃工作坊",
      "visual.scenarioImageTitle": "情境模擬規劃工作坊",
      "visual.energyImageTitle": "場站能源路線圖策略",
      "visual.safetyImageTitle": "安全與 ADAS 教育實驗室",
      "visual.fleetImageTitle": "車聯網與車隊服務實驗室",
      "visual.esgImageTitle": "ESG 與政策策略儀表板",
      "dynamic.trend.title": "趨勢雷達動畫",
      "dynamic.maturity.title": "技術成熟度四象限動畫",
      "dynamic.scenario.title": "情境模擬互動地圖",
      "dynamic.energy.title": "能源路線圖交叉點動畫",
      "dynamic.safety.title": "安全與 ADAS 風險教育動畫",
      "dynamic.fleet.title": "車聯網資料流動畫",
      "dynamic.esg.title": "ESG 政策與碳訊號動畫",
      "dynamic.roadmap.title": "策略路線圖時間軸動畫"
    },
    "en": {
      "accessibility.skipToContent": "Skip to content",
      "site.title": "Future Commercial Mobility Strategy Lab",
      "site.prototypeLabel": "Portfolio strategy prototype",
      "nav.toggle": "Open or close primary navigation",
      "nav.home": "Home",
      "nav.trendRadar": "Trend Radar",
      "nav.maturityMap": "Technology Maturity Map",
      "nav.scenarioSimulator": "Scenario Simulator",
      "nav.energyRoadmap": "Energy Roadmap",
      "nav.safetyAdas": "Safety & ADAS Lab",
      "nav.connectedFleet": "Connected Fleet Lab",
      "nav.esgPolicy": "ESG & Policy",
      "nav.roadmapStudio": "Strategy Roadmap",
      "nav.glossary": "Glossary",
      "home.label": "Commercial vehicle strategy lab",
      "home.title": "Future Commercial Mobility Strategy Lab",
      "home.subtitle": "A static portfolio prototype for commercial vehicle product planning, energy transition, connected fleets, safety education, ESG signals, and 2026 to 2035 roadmap thinking.",
      "home.ctaPrimary": "View strategy modules",
      "home.ctaSecondary": "Review governance",
      "home.legalNotice": "Copyright © 2026 張義豊(Yi-Li, Chang) All Rights Reserved.",
      "home.creativeMotivation.title": "Creative Motivation",
      "home.creativeMotivation.label": "Home-only note",
      "home.creativeMotivation.body": "This lab turns future mobility signals into practical planning tools for commercial vehicles, linking Taiwan-based operating contexts, energy transition, human-centered logistics, safety, connected fleets, ESG, and responsible AI strategy.",
      "home.guardrailDemo": "Demo data",
      "home.guardrailHypothesis": "Planning hypothesis",
      "home.guardrailReview": "Human review required",
      "home.systemTitle": "Strategy operating model",
      "home.systemYears": "2026-2035",
      "home.systemPreviewAria": "Open strategy operating model preview",
      "home.systemPreviewCloseAria": "Close strategy operating model preview",
      "system.customerMission": "Customer mission",
      "system.energy": "Energy path",
      "system.safety": "Safety education",
      "system.fleetData": "Fleet data",
      "system.esg": "ESG signals",
      "system.roadmap": "Roadmap timing",
      "governance.label": "Global operating rules",
      "governance.title": "Static portfolio architecture with demo-data discipline",
      "governance.body": "The site separates strategy hypotheses from verified facts, keeps generated data clearly labeled, and avoids official-brand confusion.",
      "governance.i18n.title": "Trilingual UI",
      "governance.i18n.body": "Every public label, control, chart caption, disclaimer, and glossary entry is managed through language keys.",
      "governance.theme.title": "Four themes",
      "governance.theme.body": "Theme switching uses stable body theme tokens without resetting content or interactive state.",
      "governance.disclaimer.title": "Demo data first",
      "governance.disclaimer.body": "Scores and scenarios are illustrative unless the source registry explicitly supports a claim.",
      "modules.label": "Strategy surfaces",
      "modules.title": "Module shells ready for deeper content sections",
      "modules.body": "Each module inherits the same language, theme, glossary, image-governance, and writing-safeguard systems.",
      "module.link": "Jump to this module",
      "module.trend.category": "Signal ranking",
      "module.trend.title": "Trend Radar",
      "module.trend.body": "Compares BEV, FCEV, ADAS, connected fleet, V2G, logistics automation, and ESG signals through planning criteria.",
      "module.trend.details": "Priority scores should remain demo-labeled until source support and Taiwan-specific validation are added.",
      "module.maturity.category": "Readiness mapping",
      "module.maturity.title": "Technology Maturity Map",
      "module.maturity.body": "Places technologies by maturity, product-planning value, cost, regulation risk, service readiness, and dealer education needs.",
      "module.scenario.category": "Customer context",
      "module.scenario.title": "Scenario Simulator",
      "module.scenario.body": "Frames routes, mileage, payload, charging access, downtime sensitivity, and ESG pressure into strategy recommendations.",
      "module.energy.category": "Powertrain pathway",
      "module.energy.title": "Energy Roadmap",
      "module.energy.body": "Compares diesel, hybrid, BEV, FCEV, depot charging, battery SOH, and V2G under route and infrastructure constraints.",
      "module.adas.category": "Safety education",
      "module.adas.title": "Safety & ADAS Lab",
      "module.adas.body.before": "Turns",
      "module.adas.body.after": "features into careful customer education, system-limit explanations, and dealer training material.",
      "module.fleet.category": "Service model",
      "module.fleet.title": "Connected Fleet Lab",
      "module.fleet.body.before": "Connects",
      "module.fleet.body.after": "remote diagnostics, predictive maintenance, route optimization, uptime, and service planning.",
      "module.esg.category": "Policy signals",
      "module.esg.title": "ESG & Policy Dashboard",
      "module.esg.body": "and policy signals are treated as planning inputs that require current-source validation.",
      "module.roadmap.category": "2026-2035 timing",
      "module.roadmap.title": "Strategy Roadmap Studio",
      "module.roadmap.body": "Organizes near-term education, medium-term PoC work, long-term tracking, and deferred technologies into a planning roadmap.",
      "control.clusterLabel": "Floating controls",
      "control.language": "Language",
      "control.theme": "Theme",
      "control.toc": "Contents",
      "control.seeMore": "See more",
      "control.showLess": "Show less",
      "theme.a": "Theme A | Warm Academy",
      "theme.b": "Theme B | Morning Mobility",
      "theme.c": "Theme C | Human Service Mobility",
      "theme.d": "Theme D | Quiet Governance",
      "toc.home": "Home",
      "toc.creativeMotivation": "Creative Motivation",
      "toc.governance": "Governance",
      "toc.modules": "Strategy modules",
      "toc.trendRadar": "Trend Radar",
      "toc.maturityMap": "Technology Maturity Map",
      "toc.scenarioSimulator": "Scenario Simulator",
      "toc.energyRoadmap": "Energy Roadmap",
      "toc.safetyAdas": "Safety & ADAS",
      "toc.connectedFleet": "Connected Fleet",
      "toc.esgPolicy": "ESG & Policy",
      "toc.roadmapStudio": "Strategy Roadmap",
      "toc.glossary": "Glossary",
      "toc.downloads": "Reference documents",
      "glossary.label": "Shared terminology",
      "glossary.title": "Glossary behavior scaffold",
      "glossary.body": "Acronyms such as ADAS, BEV, FCEV, TCO, V2G, and ODD open localized popups with definitions and planning relevance.",
      "glossary.openTerm": "Open glossary entry",
      "glossary.close": "Close glossary entry",
      "glossary.sourceCategory": "Source category",
      "glossary.planningRelevance": "Planning relevance",
      "glossary.sourceNote": "Source note",
      "downloads.label": "Reference notes",
      "downloads.title": "Static documents",
      "downloads.body": "These notes support transparent demo-data and limitation handling.",
      "downloads.dataDisclaimer": "Data disclaimer",
      "downloads.assumptions": "Assumptions and limitations",
      "trend.openModule": "Open Trend Radar",
      "trend.label": "Signal prioritization",
      "trend.title": "Trend Radar",
      "trend.subtitle": "Compares future commercial mobility signals as product-planning priorities, not as a prediction of one winner.",
      "trend.demoLabel": "Demo assumptions",
      "trend.taiwanCaveat": "Global signals require Taiwan market validation.",
      "trend.selectedLabel": "Selected signal",
      "trend.loading": "Loading trend data",
      "trend.loadingBody": "Loading the demo assumptions and scoring model.",
      "trend.actionsTitle": "Suggested next actions",
      "trend.methodLabel": "Method",
      "trend.methodTitle": "Weighted planning score",
      "trend.methodBody": "The priority score weights market relevance, technology readiness, cost feasibility, regulation readiness, customer pain fit, dealer education value, and strategic differentiation.",
      "trend.radarTitle": "Selected-signal radar",
      "trend.bubbleTitle": "Maturity bubble view",
      "trend.bubbleLegend": "Bubble signal legend",
      "trend.heatTitle": "Risk and readiness heat grid",
      "trend.timelineTitle": "2026 to 2035 signal timeline",
      "trend.svgLabel": "SVG",
      "trend.tableLabel": "Table",
      "trend.htmlLabel": "HTML",
      "trend.sourceLimitTitle": "Source limitation note",
      "trend.sourceLimitBody": "These scores translate the proposal into demo assumptions. They should be replaced or recalibrated when verified local market evidence is available.",
      "trend.writingGuardTitle": "Writing guardrail",
      "trend.writingGuardBody": "The radar compares planning attention. It does not claim that one technology will win or that every fleet should follow the same route.",
      "trend.metric.market": "Market relevance",
      "trend.metric.tech": "Technology readiness",
      "trend.metric.cost": "Cost feasibility",
      "trend.metric.regulation": "Regulation readiness",
      "trend.metric.customer": "Customer pain fit",
      "trend.metric.dealer": "Dealer education value",
      "trend.metric.differentiation": "Strategic differentiation",
      "trend.metricShort.market": "Market",
      "trend.metricShort.tech": "Tech",
      "trend.metricShort.cost": "Cost",
      "trend.metricShort.regulation": "Reg.",
      "trend.metricShort.customer": "Pain",
      "trend.metricShort.dealer": "Dealer",
      "trend.metricShort.differentiation": "Diff.",
      "trend.scoreLabel": "Priority",
      "trend.confidenceLabel": "Data confidence",
      "trend.riskLabel": "Risk",
      "trend.radarSummary": "{trend} has a priority score of {score}. Its strongest dimension is {metric}, scoring {value}.",
      "trend.bubbleSummary": "Within the current filter, {trend} has the highest priority score at {score}.",
      "trend.heatSummary": "This grid compares {count} signals. {highRisk} are marked high risk and need stronger local validation.",
      "trend.timelineSummary": "The timeline shows {total} signals. {nearTerm} can begin planning preparation in 2026 or 2027.",
      "trend.noData": "No trend data is available for this category.",
      "trend.loadError": "Trend data could not be loaded.",
      "trend.table.signal": "Signal",
      "trend.category.all": "All signals",
      "trend.category.energy_transition": "Energy transition",
      "trend.category.infrastructure": "Infrastructure",
      "trend.category.safety": "Safety education",
      "trend.category.data_services": "Data services",
      "trend.category.policy_esg": "ESG and policy",
      "trend.category.automation": "Logistics automation",
      "trend.category.energy_services": "Energy services",
      "trend.category.business_model": "Service business model",
      "trend.status.near_term_poc": "Near-term PoC candidate",
      "trend.status.foundation_enabler": "Foundation enabler",
      "trend.status.education_now": "Educate now",
      "trend.status.service_package": "Service package design",
      "trend.status.transition_support": "Transition support",
      "trend.status.guarded_experiment": "Guarded experiment",
      "trend.status.monitor_and_frame": "Monitor and frame",
      "trend.status.controlled_poc": "Controlled PoC",
      "trend.status.long_term_watch": "Long-term watch",
      "trend.status.scenario_watch": "Scenario watch",
      "trend.status.business_design": "Business design",
      "trend.risk.low": "Low",
      "trend.risk.medium": "Medium",
      "trend.risk.high": "High",
      "maturity.openModule": "Open Technology Maturity Map",
      "maturity.label": "Readiness decision map",
      "maturity.title": "Technology Maturity Map",
      "maturity.subtitle": "Sorts future-mobility technologies into near-term education, PoC planning, long-term tracking, or deferred observation so the discussion does not become a buzzword list.",
      "maturity.demoLabel": "Demo assumptions",
      "maturity.caveat": "Suitability depends on route, payload, infrastructure, service readiness, regulation, cost maturity, and dealer education.",
      "maturity.selectedLabel": "Selected technology",
      "maturity.loading": "Loading technology data",
      "maturity.loadingBody": "Loading the demo assumptions and maturity model.",
      "maturity.methodLabel": "How to read",
      "maturity.methodTitle": "Four-quadrant planning logic",
      "maturity.methodBody": "Maturity and product-planning value decide the quadrant. Cost changes bubble size, while risk color highlights where validation and education need more care.",
      "maturity.chartTitle": "Technology maturity quadrant map",
      "maturity.cardsTitle": "Technology cards",
      "maturity.keyboardLabel": "Keyboard friendly",
      "maturity.scenarioTitle": "Suitable scenarios",
      "maturity.disclaimerTitle": "Demo-data boundary",
      "maturity.disclaimerBody": "Scores are illustrative planning assumptions. They should be recalibrated with verified local evidence before business use.",
      "maturity.guardrailTitle": "Writing guardrail",
      "maturity.guardrailBody": "The map avoids universal claims. A technology becomes more suitable only when customer duty cycle, infrastructure, service network, regulation, cost maturity, and dealer education are aligned.",
      "maturity.legendTitle": "Legend",
      "maturity.legendCost": "Larger bubble means higher implementation cost",
      "maturity.chartSummary": "The current view contains {total} technologies: {near} for near-term education, {poc} for PoC planning, {track} for long-term tracking, and {defer} for deferred observation.",
      "maturity.loadError": "Technology maturity data could not be loaded.",
      "maturity.metric.maturity": "Technology maturity",
      "maturity.metric.value": "Product-planning value",
      "maturity.metric.cost": "Implementation cost",
      "maturity.metric.regulationRisk": "Regulation risk",
      "maturity.metric.dealerTraining": "Dealer training difficulty",
      "maturity.metric.serviceReadiness": "Service readiness",
      "maturity.metricShort.maturity": "Maturity",
      "maturity.metricShort.value": "Planning value",
      "maturity.metricShort.cost": "Cost",
      "maturity.metricShort.service": "Service",
      "maturity.axis.maturity": "Technology maturity",
      "maturity.axis.value": "Product-planning value",
      "maturity.riskLabel": "Risk",
      "maturity.risk.low": "Low risk",
      "maturity.risk.medium": "Medium risk",
      "maturity.risk.high": "High risk",
      "maturity.status.all": "All statuses",
      "maturity.status.near_term_education": "Near-term education",
      "maturity.status.poc_planning": "PoC planning",
      "maturity.status.long_term_tracking": "Long-term tracking",
      "maturity.status.deferred_observation": "Deferred observation",
      "maturity.category.energy_transition": "Energy transition",
      "maturity.category.infrastructure": "Infrastructure",
      "maturity.category.safety": "Safety education",
      "maturity.category.data_services": "Data services",
      "maturity.category.automation": "Logistics automation",
      "maturity.category.energy_services": "Energy services",
      "maturity.category.policy_esg": "ESG and policy",
      "footer.disclaimer": "Personal portfolio prototype. Demo data only. No official Toyota, HINO, Hotai, dealer, customer, or government endorsement is implied.",
      "scenario.openModule": "Open Scenario Simulator",
      "scenario.label": "Customer scenario simulation",
      "scenario.title": "Scenario Simulator",
      "scenario.subtitle": "Turns customer mission, route, energy access, and operational sensitivity into education, PoC, tracking, and deferred-observation layers.",
      "scenario.demoDataset": "Demo Dataset",
      "scenario.prototypeSimulation": "Prototype Simulation",
      "scenario.humanReviewRequired": "Human Review Required",
      "scenario.boundaryTitle": "Use boundary",
      "scenario.boundaryBody": "This simulator is a portfolio prototype only. It is not an official procurement, engineering, legal, or product-launch recommendation tool.",
      "scenario.presetTitle": "Choose customer scenario",
      "scenario.inputsTitle": "Adjust operating conditions",
      "scenario.outputsTitle": "Strategy outputs",
      "scenario.selectedScenario": "Current scenario",
      "scenario.recommendationLayers": "Four strategy layers",
      "scenario.flowTitle": "Strategy flow",
      "scenario.flowSummary": "Current scenario is {scenario}, with {risk}. The prototype returns {near} near-term education topics, {medium} medium-term PoC candidates, {long} long-term tracking items, and {deferred} deferred technologies.",
      "scenario.matrixTitle": "Scenario condition matrix",
      "scenario.keyboardLabel": "Keyboard and tap friendly",
      "scenario.layer.near": "Near-term education topics",
      "scenario.layer.medium": "Medium-term PoC candidates",
      "scenario.layer.long": "Long-term tracking technologies",
      "scenario.layer.deferred": "Deferred technologies",
      "scenario.layer.near.short": "Education",
      "scenario.layer.medium.short": "PoC",
      "scenario.layer.long.short": "Track",
      "scenario.layer.deferred.short": "Defer",
      "scenario.reasoningTitle": "Product-planning reasoning",
      "scenario.dealerEducationTitle": "Dealer education suggestions",
      "scenario.interviewQuestionsTitle": "Customer interview questions",
      "scenario.dataGapsTitle": "Data gaps",
      "scenario.humanReviewTitle": "Human-review notes",
      "scenario.input.route_type": "Route type",
      "scenario.input.annual_mileage": "Annual mileage",
      "scenario.input.payload_level": "Payload level",
      "scenario.input.depot_charging": "Depot charging availability",
      "scenario.input.downtime_sensitivity": "Downtime sensitivity",
      "scenario.input.esg_pressure": "ESG pressure",
      "scenario.input.regulation_exposure": "Regulation exposure",
      "scenario.input.infrastructure_readiness": "Infrastructure readiness",
      "scenario.option.urban_fixed": "Urban fixed route",
      "scenario.option.regional_mixed": "Regional mixed route",
      "scenario.option.site_variable": "Variable site route",
      "scenario.option.long_haul": "Long-haul corridor",
      "scenario.option.mixed_portfolio": "Mixed fleet portfolio",
      "scenario.option.closed_site": "Closed logistics site",
      "scenario.option.low": "Low",
      "scenario.option.medium": "Medium",
      "scenario.option.high": "High",
      "scenario.option.very_high": "Very high",
      "scenario.option.critical": "Critical",
      "scenario.option.available": "Available",
      "scenario.option.partial": "Partial",
      "scenario.option.limited": "Limited",
      "scenario.option.light": "Light",
      "scenario.option.heavy": "Heavy",
      "scenario.option.passenger": "Passenger",
      "scenario.option.mixed": "Mixed",
      "scenario.riskTitle": "Prototype risk reading",
      "scenario.risk.low": "Low risk",
      "scenario.risk.medium": "Medium risk",
      "scenario.risk.high": "High risk",
      "scenario.noRecommendations": "No additional recommendation is available for the current conditions. Review the data gaps first.",
      "scenario.loadError": "Scenario simulation data could not be loaded.",
      "scenario.termLabel": "Key terms",
      "scenario.conditionsTitle": "Current input conditions",
      "scenario.noLogoPolicyTitle": "No-logo visual policy",
      "scenario.noLogoPolicyBody": "The simulator uses abstract flows and diagrams only. It does not use real brand logos, license plates, customer names, or official visuals.",
      "scenario.disclaimerTitle": "Demo-data boundary",
      "scenario.disclaimerBody": "All outputs are static demo assumptions. Before formal use, validate them with current regulations, vehicle specifications, energy prices, route data, and channel capability.",
      "scenario.resetPreset": "Apply scenario",
      "energy.openModule": "Open Energy Roadmap",
      "energy.label": "Energy strategy roadmap",
      "energy.title": "Energy Roadmap",
      "energy.subtitle": "Compares diesel, hybrid, BEV, FCEV, V2G, and depot energy management across conditions, risks, and timing from a 2026 to 2035 product-planning view.",
      "energy.demoLabel": "Demo assumptions",
      "energy.caveat": "Energy pathways depend on route, mileage, payload, fueling infrastructure, service network, policy, and TCO crossover conditions.",
      "energy.boundaryTitle": "Use boundary",
      "energy.controlsTitle": "Adjust energy conditions",
      "energy.powertrainTitle": "Choose energy path",
      "energy.selectedLabel": "Current energy path",
      "energy.fitScore": "Fit score",
      "energy.serviceReadiness": "Service readiness",
      "energy.residualWatch": "Residual-value watch",
      "energy.timelineTitle": "2026-2035 energy timing",
      "energy.crossoverTitle": "TCO crossover sensitivity",
      "energy.depotTitle": "Depot charging capacity sketch",
      "energy.sohTitle": "SOH and residual-value watch",
      "energy.carbonTitle": "Carbon impact sketch",
      "energy.dependenciesTitle": "Key dependencies",
      "energy.risksTitle": "Risks and delay conditions",
      "energy.educationTitle": "Dealer education topics",
      "energy.suitabilityTitle": "Customer suitability",
      "energy.timelineSummary": "The roadmap places short-term education, medium-term PoC, long-term tracking, and deferred observation across 2026 to 2035. Selected path: {name}; current status: {status}.",
      "energy.crossoverSummary": "The demo TCO curves show the relative cost path for {name} under the current conditions; weak infrastructure or service readiness delays crossover.",
      "energy.depotSummary": "The depot capacity sketch converts charging availability, route stability, and annual mileage into a demo load signal for planning discussion only.",
      "energy.carbonSummary": "The carbon panel uses relative illustrative values. Formal use requires refreshed boundaries, activity data, and energy factors.",
      "energy.input.route_predictability": "Route predictability",
      "energy.input.annual_mileage": "Annual mileage",
      "energy.input.payload_level": "Payload level",
      "energy.input.depot_charging": "Depot charging availability",
      "energy.input.energy_price_stability": "Energy price stability",
      "energy.input.service_readiness": "Service readiness",
      "energy.input.esg_pressure": "ESG pressure",
      "energy.input.policy_support": "Policy support",
      "energy.option.low": "Low",
      "energy.option.medium": "Medium",
      "energy.option.high": "High",
      "energy.option.very_high": "Very high",
      "energy.option.light": "Light",
      "energy.option.heavy": "Heavy",
      "energy.option.passenger": "Passenger",
      "energy.option.limited": "Limited",
      "energy.option.partial": "Partial",
      "energy.option.available": "Available",
      "energy.status.short_term_education": "Short-term education",
      "energy.status.medium_term_poc": "Medium-term PoC",
      "energy.status.long_term_tracking": "Long-term tracking",
      "energy.status.deferred_observation": "Deferred observation",
      "energy.segment.education": "Education",
      "energy.segment.poc": "PoC",
      "energy.segment.tracking": "Tracking",
      "energy.segment.defer": "Defer",
      "energy.loadError": "Energy roadmap data could not be loaded.",
      "energy.noLogoPolicyTitle": "No-logo visual policy",
      "energy.noLogoPolicyBody": "Energy visuals use abstract SVG, cards, and illustrative values only. They do not use real brand logos, license plates, customers, or official visuals.",
      "energy.disclaimerTitle": "Demo-data boundary",
      "energy.disclaimerBody": "All energy cost, carbon impact, SOH, residual value, and timing values are static demo assumptions and must be reviewed with current evidence before formal use.",
      "energy.keyboardLabel": "Keyboard and tap friendly",
      "energy.svgLabel": "SVG",
      "energy.termLabel": "Key terms",
      "safety.openModule": "Open Safety & ADAS Lab",
      "safety.label": "Safety education and risk communication",
      "safety.title": "Safety & ADAS Lab",
      "safety.subtitle": "Translates AEB, blind spot detection, surround view, fatigue warning, V2X, driver behavior analytics, and edge sensing into product planning, dealer education, customer value, and limitation communication.",
      "safety.demoLabel": "Demo assumptions",
      "safety.caveat": "ADAS is driver assistance, not an accident-elimination or autonomous-driving promise. Suitability depends on model, scenario, sensing conditions, driver education, and regulation.",
      "safety.functionLibrary": "Safety function library",
      "safety.selectedLabel": "Current safety function",
      "safety.technicalFunction": "Technical function",
      "safety.customerValue": "Customer value",
      "safety.driverEducationValue": "Driver education value",
      "safety.vehicleSegments": "Suitable vehicle segments",
      "safety.scenarios": "Suitable scenarios",
      "safety.limitations": "System limitations",
      "safety.doNotOverclaim": "Do not overclaim",
      "safety.planningImplications": "Product-planning implications",
      "safety.dealerEducationMaterials": "Dealer education materials",
      "safety.customerFAQ": "Customer FAQ",
      "safety.riskHeatMapTitle": "Risk heat map",
      "safety.riskHeatMapSummary": "For {name}, the highest demo risk is {metric}, scoring {score}. Treat this as education and review priority, not safety-performance certification.",
      "safety.risk.low": "Low risk",
      "safety.risk.medium": "Medium risk",
      "safety.risk.high": "High risk",
      "safety.metric.overrelianceRisk": "Overreliance risk",
      "safety.metric.sensingBoundary": "Sensing boundary",
      "safety.metric.trainingNeed": "Training need",
      "safety.metric.dataGovernance": "Data governance",
      "safety.metric.scenarioComplexity": "Scenario complexity",
      "safety.boundaryTitle": "Use boundary",
      "safety.loadError": "Safety & ADAS data could not be loaded.",
      "safety.noLogoPolicyTitle": "No-logo visual policy",
      "safety.noLogoPolicyBody": "This page uses abstract cards and risk sketches only. It does not use real brand logos, license plates, customers, official imagery, or rendered accident scenes.",
      "safety.disclaimerTitle": "Responsibility communication boundary",
      "safety.disclaimerBody": "All safety-function copy is demo education text. Before formal use, review it against actual vehicle specifications, owner manuals, regulation, test data, and channel training material.",
      "safety.keyboardLabel": "Keyboard and tap friendly",
      "safety.termLabel": "Key terms",
      "safety.faqQuestion": "Question",
      "safety.faqAnswer": "Answer",
      "fleet.openModule": "Open Connected Fleet Lab",
      "fleet.label": "Fleet data service lab",
      "fleet.title": "Connected Fleet Lab",
      "fleet.subtitle": "Shows how commercial vehicle product planning can extend from hardware into FMS, remote diagnostics, predictive maintenance, uptime support, carbon tracking, operating efficiency, and customer reports.",
      "fleet.demoLabel": "Demo assumptions",
      "fleet.privacyCaveat": "This page does not collect, transmit, or analyze any real vehicle or customer data; all values and workflows are static demo assumptions.",
      "fleet.moduleLibrary": "Fleet service modules",
      "fleet.selectedLabel": "Current service module",
      "fleet.flowTitle": "Connected-fleet data flow",
      "fleet.flowSummary": "The data flow starts with vehicle signals, then moves through data cleaning, analysis, service action, dealer support, and customer reporting. Selected module: {name}.",
      "fleet.dataInputs": "Data inputs",
      "fleet.customerValue": "Customer value",
      "fleet.planningValue": "Product-planning value",
      "fleet.serviceRequirements": "Service or governance requirements",
      "fleet.riskNotes": "Risk notes",
      "fleet.dealerEducation": "Dealer education notes",
      "fleet.reportOutputs": "Report outputs",
      "fleet.governanceTitle": "Privacy and data-governance reminder",
      "fleet.governanceBody": "Any formal FMS or fleet data service requires customer consent, field definitions, retention rules, human review, cybersecurity, and dealer responsibility boundaries. This website does not connect APIs or live telemetry.",
      "fleet.noLogoPolicyTitle": "No-logo visual policy",
      "fleet.noLogoPolicyBody": "The data flow uses abstract nodes and cards only. It does not use real brand logos, license plates, customer names, vehicle IDs, or official interface screenshots.",
      "fleet.disclaimerTitle": "Demo-data boundary",
      "fleet.disclaimerBody": "All connected-fleet module content is demo education and planning assumption. Formal commercial use requires review against contracts, regulation, cybersecurity, customer workflows, and dealer capability.",
      "fleet.maturity.near_term_education": "Near-term education",
      "fleet.maturity.medium_term_poc": "Medium-term PoC",
      "fleet.maturity.long_term_tracking": "Long-term tracking",
      "fleet.maturity.deferred_observation": "Deferred observation",
      "fleet.risk.low": "Low risk",
      "fleet.risk.medium": "Medium risk",
      "fleet.risk.high": "High risk",
      "fleet.riskScore": "Governance risk score",
      "fleet.loadError": "Connected fleet data could not be loaded.",
      "fleet.keyboardLabel": "Keyboard and tap friendly",
      "fleet.termLabel": "Key terms",
      "fleet.svgLabel": "SVG",
      "esg.openModule": "Open ESG & Policy Dashboard",
      "esg.label": "ESG, policy, and carbon tracking",
      "esg.title": "ESG & Policy Dashboard",
      "esg.subtitle": "Connects energy transition, carbon tracking, diesel-replacement signals, subsidy and policy monitoring, corporate sustainability reporting, and fleet decarbonization pressure into product-planning inputs.",
      "esg.demoLabel": "Demo assumptions",
      "esg.verificationCaveat": "Policy, subsidy, and carbon factors require latest source verification; this page is not legal, accounting, or formal disclosure advice.",
      "esg.signalLibrary": "Policy and carbon signals",
      "esg.selectedSignal": "Current signal",
      "esg.carbonEstimator": "Demo carbon-estimation panel",
      "esg.controlsTitle": "Estimation conditions",
      "esg.carbonSummary": "Under demo conditions, the diesel baseline is about {baseline} tCO2e, the modeled replacement mix is about {modeled} tCO2e, and the difference is {difference} tCO2e. This is not a verified reduction.",
      "esg.policyTimeline": "2026-2035 monitoring timeline",
      "esg.actionRecommendations": "Action recommendations",
      "esg.sourceConfidence": "Source confidence",
      "esg.updatePlaceholder": "Update-date placeholder",
      "esg.sourceStatus": "Source status",
      "esg.planningUse": "Planning use",
      "esg.limitation": "Limitation note",
      "esg.actions": "Suggested actions",
      "esg.signalScore": "Signal score",
      "esg.metric.policyReadiness": "Policy readiness",
      "esg.metric.carbonInfluence": "Carbon influence",
      "esg.metric.customerPressure": "Customer pressure",
      "esg.metric.dataReadiness": "Data readiness",
      "esg.input.annualMileage": "Annual mileage",
      "esg.input.dieselIntensity": "Diesel intensity",
      "esg.input.electricIntensity": "Electricity intensity",
      "esg.input.renewableShare": "Renewable share",
      "esg.input.replacementShare": "Replacement share",
      "esg.option.low": "Low",
      "esg.option.medium": "Medium",
      "esg.option.high": "High",
      "esg.option.light": "Light",
      "esg.option.heavy": "Heavy",
      "esg.option.efficient": "Efficient",
      "esg.option.pilot": "Pilot",
      "esg.option.partial": "Partial",
      "esg.option.focused": "Focused",
      "esg.baselineDiesel": "Diesel baseline",
      "esg.modeledFleet": "Replacement mix",
      "esg.demoDifference": "Demo difference",
      "esg.carbonWarning": "This estimate uses demo factors; formal disclosure requires verified fuel data, electricity factors, renewable share, duty cycle, mileage, payload, and accounting method.",
      "esg.confidence.low": "Low confidence",
      "esg.confidence.medium": "Medium confidence",
      "esg.confidence.high": "High confidence",
      "esg.status.latest_verification_required": "Latest verification required",
      "esg.status.demo_assumption": "Demo assumption",
      "esg.status.simulated_source": "Simulated source",
      "esg.status.source_placeholder": "Source placeholder",
      "esg.methodologyTitle": "Writing and accounting safeguards",
      "esg.methodologyBody": "This page explains mechanisms and data needs only. It does not claim verified reductions. Formal use requires current policy sources, enterprise accounting methods, legal or compliance review, and human review.",
      "esg.noLogoPolicyTitle": "No-logo visual policy",
      "esg.noLogoPolicyBody": "The dashboard uses abstract cards, SVG, and demo values only. It does not use official marks, government-interface screenshots, customer names, license plates, or real emissions reports.",
      "esg.disclaimerTitle": "Demo-data boundary",
      "esg.disclaimerBody": "All policy, subsidy, carbon-estimation, and reporting-need content is demo planning material. It must not be used as procurement, legal, accounting, compliance, or formal sustainability disclosure basis.",
      "esg.keyboardLabel": "Keyboard and tap friendly",
      "esg.termLabel": "Key terms",
      "esg.svgLabel": "SVG",
      "esg.loadError": "ESG & Policy data could not be loaded.",
      "downloads.proposal": "Project proposal",
      "visual.dynamicModuleLabel": "Interactive visual module",
      "visual.expandImage": "Expand image",
      "visual.lightboxAria": "Expanded image preview",
      "visual.closeImage": "Close expanded image",
      "visual.maturityImageTitle": "Technology maturity planning workshop",
      "visual.scenarioImageTitle": "Scenario simulator planning workshop",
      "visual.energyImageTitle": "Depot energy roadmap strategy",
      "visual.safetyImageTitle": "Safety and ADAS education lab",
      "visual.fleetImageTitle": "Connected fleet service lab",
      "visual.esgImageTitle": "ESG and policy strategy dashboard",
      "dynamic.trend.title": "Trend Radar animation",
      "dynamic.maturity.title": "Technology maturity quadrant animation",
      "dynamic.scenario.title": "Scenario simulator interactive map",
      "dynamic.energy.title": "Energy roadmap crossover animation",
      "dynamic.safety.title": "Safety and ADAS risk education animation",
      "dynamic.fleet.title": "Connected fleet data-flow animation",
      "dynamic.esg.title": "ESG policy and carbon signal animation",
      "dynamic.roadmap.title": "Strategy roadmap timeline animation"
    },
    "ja": {
      "accessibility.skipToContent": "本文へ移動",
      "site.title": "商用車の未来モビリティ・新エネルギー戦略ラボ",
      "site.prototypeLabel": "ポートフォリオ戦略プロトタイプ",
      "nav.toggle": "メインナビゲーションを開閉",
      "nav.home": "ホーム",
      "nav.trendRadar": "トレンドレーダー",
      "nav.maturityMap": "技術成熟度マップ",
      "nav.scenarioSimulator": "シナリオシミュレーター",
      "nav.energyRoadmap": "エネルギーロードマップ",
      "nav.safetyAdas": "安全・ADAS ラボ",
      "nav.connectedFleet": "コネクテッドフリート",
      "nav.esgPolicy": "ESG と政策",
      "nav.roadmapStudio": "戦略ロードマップ",
      "nav.glossary": "用語集",
      "home.label": "商用車戦略ラボ",
      "home.title": "商用車の未来モビリティ・新エネルギー戦略ラボ",
      "home.subtitle": "商用車の商品企画、エネルギー転換、コネクテッドフリート、安全教育、ESG シグナル、2026 年から 2035 年までのロードマップ思考を示す静的ポートフォリオ原型です。",
      "home.ctaPrimary": "戦略モジュールを見る",
      "home.ctaSecondary": "ガバナンスを見る",
      "home.legalNotice": "著作権所有 © 2026 張義豊(Yi-Li, Chang) 無断転載を禁じます。",
      "home.creativeMotivation.title": "制作動機",
      "home.creativeMotivation.label": "ホーム限定ノート",
      "home.creativeMotivation.body": "このラボは、未来モビリティのシグナルを商用車の商品企画ツールへ変換し、台湾の運用文脈、エネルギー転換、人間中心の物流、安全、コネクテッドフリート、ESG、責任ある AI 戦略を結びます。",
      "home.guardrailDemo": "デモデータ",
      "home.guardrailHypothesis": "企画仮説",
      "home.guardrailReview": "人による確認が必要",
      "home.systemTitle": "戦略運用モデル",
      "home.systemYears": "2026-2035",
      "home.systemPreviewAria": "戦略運用モデルのプレビューを開く",
      "home.systemPreviewCloseAria": "戦略運用モデルのプレビューを閉じる",
      "system.customerMission": "顧客ミッション",
      "system.energy": "エネルギー経路",
      "system.safety": "安全教育",
      "system.fleetData": "フリートデータ",
      "system.esg": "ESG シグナル",
      "system.roadmap": "ロードマップ時期",
      "governance.label": "全体運用ルール",
      "governance.title": "デモデータ規律を備えた静的ポートフォリオ設計",
      "governance.body": "このサイトは、戦略仮説と検証済み事実を分け、生成データを明示し、公式ブランドとの混同を避けます。",
      "governance.i18n.title": "三言語 UI",
      "governance.i18n.body": "公開ラベル、操作ボタン、チャート説明、免責文、用語説明はすべて言語キーで管理します。",
      "governance.theme.title": "四つのテーマ",
      "governance.theme.body": "テーマ切り替えは安定した body token を使い、内容や操作状態をリセットしません。",
      "governance.disclaimer.title": "デモデータを明示",
      "governance.disclaimer.body": "スコアとシナリオは、ソースレジストリが明示的に支える場合を除き、説明用データです。",
      "modules.label": "戦略インターフェース",
      "modules.title": "後続の詳細コンテンツに備えたモジュール骨格",
      "modules.body": "各モジュールは、言語、テーマ、用語集、画像ガバナンス、文章ガードレールを継承します。",
      "module.link": "このモジュールへ移動",
      "module.trend.category": "シグナル順位付け",
      "module.trend.title": "トレンドレーダー",
      "module.trend.body": "BEV、FCEV、ADAS、コネクテッドフリート、V2G、物流自動化、ESG シグナルを企画基準で比較します。",
      "module.trend.details": "優先度スコアは、出典の裏付けと台湾文脈での検証が加わるまでデモ表示を維持します。",
      "module.maturity.category": "成熟度マッピング",
      "module.maturity.title": "技術成熟度マップ",
      "module.maturity.body": "成熟度、商品企画価値、コスト、規制リスク、サービス準備度、販売チャネル教育の観点で技術を配置します。",
      "module.scenario.category": "顧客文脈",
      "module.scenario.title": "シナリオシミュレーター",
      "module.scenario.body": "ルート、走行距離、積載、充電条件、停止リスク、ESG 圧力を戦略提案へつなげます。",
      "module.energy.category": "パワートレイン経路",
      "module.energy.title": "エネルギーロードマップ",
      "module.energy.body": "ルートとインフラ制約の下で、ディーゼル、ハイブリッド、BEV、FCEV、拠点充電、電池 SOH、V2G を比較します。",
      "module.adas.category": "安全教育",
      "module.adas.title": "安全・ADAS ラボ",
      "module.adas.body.before": "安全教育では",
      "module.adas.body.after": "機能を、顧客教育、システム限界の説明、販売チャネル研修の素材へ変換します。",
      "module.fleet.category": "サービスモデル",
      "module.fleet.title": "コネクテッドフリートラボ",
      "module.fleet.body.before": "車隊サービスでは",
      "module.fleet.body.after": "遠隔診断、予知保全、ルート最適化、稼働率、サービス企画をつなぎます。",
      "module.esg.category": "政策シグナル",
      "module.esg.title": "ESG・政策ダッシュボード",
      "module.esg.body": "と政策シグナルは、最新の出典確認を必要とする企画入力として扱います。",
      "module.roadmap.category": "2026-2035 の時期設計",
      "module.roadmap.title": "戦略ロードマップスタジオ",
      "module.roadmap.body": "短期教育、中期 PoC、長期追跡、保留技術を商品企画ロードマップとして整理します。",
      "control.clusterLabel": "フローティング操作",
      "control.language": "言語",
      "control.theme": "テーマ",
      "control.toc": "目次",
      "control.seeMore": "詳しく見る",
      "control.showLess": "閉じる",
      "theme.a": "テーマ A｜ウォームアカデミー",
      "theme.b": "テーマ B｜モーニングモビリティ",
      "theme.c": "テーマ C｜ヒューマンサービスモビリティ",
      "theme.d": "テーマ D｜静かなガバナンス",
      "toc.home": "ホーム",
      "toc.creativeMotivation": "制作動機",
      "toc.governance": "ガバナンス",
      "toc.modules": "戦略モジュール",
      "toc.trendRadar": "トレンドレーダー",
      "toc.maturityMap": "技術成熟度マップ",
      "toc.scenarioSimulator": "シナリオシミュレーター",
      "toc.energyRoadmap": "エネルギーロードマップ",
      "toc.safetyAdas": "安全・ADAS",
      "toc.connectedFleet": "コネクテッドフリート",
      "toc.esgPolicy": "ESG と政策",
      "toc.roadmapStudio": "戦略ロードマップ",
      "toc.glossary": "用語集",
      "toc.downloads": "参考文書",
      "glossary.label": "共通用語",
      "glossary.title": "用語 popup の動作骨格",
      "glossary.body": "ADAS、BEV、FCEV、TCO、V2G、ODD などの略語は、定義と企画上の意味を示すローカライズされた popup を開きます。",
      "glossary.openTerm": "用語説明を開く",
      "glossary.close": "用語説明を閉じる",
      "glossary.sourceCategory": "出典カテゴリ",
      "glossary.planningRelevance": "商品企画との関係",
      "glossary.sourceNote": "出典メモ",
      "downloads.label": "参考メモ",
      "downloads.title": "静的文書",
      "downloads.body": "これらの文書は、デモデータと制約条件を透明に扱うためのものです。",
      "downloads.dataDisclaimer": "データ免責事項",
      "downloads.assumptions": "仮定と制約",
      "trend.openModule": "トレンドレーダーを開く",
      "trend.label": "シグナル優先度",
      "trend.title": "トレンドレーダー",
      "trend.subtitle": "商用モビリティの将来シグナルを、予測ではなく商品企画上の優先度として比較します。",
      "trend.demoLabel": "デモ仮定データ",
      "trend.taiwanCaveat": "国際シグナルは台湾市場での検証が必要です。",
      "trend.selectedLabel": "選択中のシグナル",
      "trend.loading": "トレンドデータを読み込み中",
      "trend.loadingBody": "デモ仮定とスコアリングモデルを読み込んでいます。",
      "trend.actionsTitle": "次のアクション案",
      "trend.methodLabel": "方法",
      "trend.methodTitle": "加重された企画スコア",
      "trend.methodBody": "優先度スコアは、市場関連性、技術成熟度、コスト実現性、規制成熟度、顧客課題との適合、販売店教育価値、戦略的差別化を加重して比較します。",
      "trend.radarTitle": "選択シグナルのレーダー",
      "trend.bubbleTitle": "成熟度バブルビュー",
      "trend.bubbleLegend": "バブル図のシグナル一覧",
      "trend.heatTitle": "リスクと成熟度のヒートグリッド",
      "trend.timelineTitle": "2026 年から 2035 年のシグナルタイムライン",
      "trend.svgLabel": "SVG",
      "trend.tableLabel": "表",
      "trend.htmlLabel": "HTML",
      "trend.sourceLimitTitle": "出典制約メモ",
      "trend.sourceLimitBody": "これらのスコアは提案内容をデモ仮定に置き換えたものです。台湾市場で検証された根拠が得られた時点で、再調整または置き換える必要があります。",
      "trend.writingGuardTitle": "記述ガードレール",
      "trend.writingGuardBody": "このレーダーは企画上の注意配分を比較します。特定技術の勝利や、すべての車隊が同じ道を進むことを主張しません。",
      "trend.metric.market": "市場関連性",
      "trend.metric.tech": "技術成熟度",
      "trend.metric.cost": "コスト実現性",
      "trend.metric.regulation": "規制成熟度",
      "trend.metric.customer": "顧客課題との適合",
      "trend.metric.dealer": "販売店教育価値",
      "trend.metric.differentiation": "戦略的差別化",
      "trend.metricShort.market": "市場",
      "trend.metricShort.tech": "技術",
      "trend.metricShort.cost": "コスト",
      "trend.metricShort.regulation": "規制",
      "trend.metricShort.customer": "課題",
      "trend.metricShort.dealer": "教育",
      "trend.metricShort.differentiation": "差別化",
      "trend.scoreLabel": "優先度",
      "trend.confidenceLabel": "データ信頼度",
      "trend.riskLabel": "リスク",
      "trend.radarSummary": "{trend} の優先度は {score} です。最も高い構面は {metric} で、スコアは {value} です。",
      "trend.bubbleSummary": "現在の絞り込みでは、{trend} が最も高い優先度で、スコアは {score} です。",
      "trend.heatSummary": "この表は {count} 個のシグナルを比較します。{highRisk} 個は高リスクで、より強い現地検証が必要です。",
      "trend.timelineSummary": "タイムラインは {total} 個のシグナルを示します。{nearTerm} 個は 2026 年または 2027 年から企画準備を始められます。",
      "trend.noData": "このカテゴリにはトレンドデータがありません。",
      "trend.loadError": "トレンドデータを読み込めませんでした。",
      "trend.table.signal": "シグナル",
      "trend.category.all": "すべてのシグナル",
      "trend.category.energy_transition": "エネルギー移行",
      "trend.category.infrastructure": "インフラ",
      "trend.category.safety": "安全教育",
      "trend.category.data_services": "データサービス",
      "trend.category.policy_esg": "ESG と政策",
      "trend.category.automation": "物流自動化",
      "trend.category.energy_services": "エネルギーサービス",
      "trend.category.business_model": "サービス化モデル",
      "trend.status.near_term_poc": "短期 PoC 候補",
      "trend.status.foundation_enabler": "基盤能力を優先",
      "trend.status.education_now": "今すぐ教育",
      "trend.status.service_package": "サービスパッケージ設計",
      "trend.status.transition_support": "移行支援",
      "trend.status.guarded_experiment": "ガードレール付き実験",
      "trend.status.monitor_and_frame": "監視し枠組み化",
      "trend.status.controlled_poc": "制御された PoC",
      "trend.status.long_term_watch": "長期観測",
      "trend.status.scenario_watch": "シナリオ追跡",
      "trend.status.business_design": "事業設計",
      "trend.risk.low": "低",
      "trend.risk.medium": "中",
      "trend.risk.high": "高",
      "maturity.openModule": "技術成熟度マップを開く",
      "maturity.label": "成熟度の判断マップ",
      "maturity.title": "技術成熟度マップ",
      "maturity.subtitle": "将来モビリティ技術を、短期教育、PoC 計画、長期追跡、保留観測に分け、議論が流行語の一覧で終わらないようにします。",
      "maturity.demoLabel": "デモ仮定データ",
      "maturity.caveat": "適合性は、ルート、積載、インフラ、サービス準備、規制、コスト成熟度、販売店教育に左右されます。",
      "maturity.selectedLabel": "選択中の技術",
      "maturity.loading": "技術データを読み込み中",
      "maturity.loadingBody": "デモ仮定と成熟度モデルを読み込んでいます。",
      "maturity.methodLabel": "読み方",
      "maturity.methodTitle": "四象限の企画ロジック",
      "maturity.methodBody": "成熟度と商品企画価値で象限を決めます。コストは泡の大きさ、リスクは色で示し、どこに検証と教育が必要かを見やすくします。",
      "maturity.chartTitle": "技術成熟度の四象限マップ",
      "maturity.cardsTitle": "技術カード",
      "maturity.keyboardLabel": "キーボード操作対応",
      "maturity.scenarioTitle": "適したシナリオ",
      "maturity.disclaimerTitle": "デモデータの境界",
      "maturity.disclaimerBody": "スコアは説明用の企画仮定です。事業利用の前に、検証済みの現地根拠で再調整する必要があります。",
      "maturity.guardrailTitle": "記述ガードレール",
      "maturity.guardrailBody": "このマップは普遍的な良し悪しを避けます。技術が適するのは、顧客の運用、インフラ、サービス網、規制、コスト成熟度、販売店教育がそろう場合です。",
      "maturity.legendTitle": "凡例",
      "maturity.legendCost": "泡が大きいほど導入コストが高い",
      "maturity.chartSummary": "現在の表示には {total} 件の技術があります。短期教育 {near} 件、PoC 計画 {poc} 件、長期追跡 {track} 件、保留観測 {defer} 件です。",
      "maturity.loadError": "技術成熟度データを読み込めませんでした。",
      "maturity.metric.maturity": "技術成熟度",
      "maturity.metric.value": "商品企画価値",
      "maturity.metric.cost": "導入コスト",
      "maturity.metric.regulationRisk": "規制リスク",
      "maturity.metric.dealerTraining": "販売店教育難度",
      "maturity.metric.serviceReadiness": "サービス準備度",
      "maturity.metricShort.maturity": "成熟度",
      "maturity.metricShort.value": "企画価値",
      "maturity.metricShort.cost": "コスト",
      "maturity.metricShort.service": "サービス",
      "maturity.axis.maturity": "技術成熟度",
      "maturity.axis.value": "商品企画価値",
      "maturity.riskLabel": "リスク",
      "maturity.risk.low": "低リスク",
      "maturity.risk.medium": "中リスク",
      "maturity.risk.high": "高リスク",
      "maturity.status.all": "すべての状態",
      "maturity.status.near_term_education": "短期教育",
      "maturity.status.poc_planning": "PoC 計画",
      "maturity.status.long_term_tracking": "長期追跡",
      "maturity.status.deferred_observation": "保留観測",
      "maturity.category.energy_transition": "エネルギー移行",
      "maturity.category.infrastructure": "インフラ",
      "maturity.category.safety": "安全教育",
      "maturity.category.data_services": "データサービス",
      "maturity.category.automation": "物流自動化",
      "maturity.category.energy_services": "エネルギーサービス",
      "maturity.category.policy_esg": "ESG と政策",
      "footer.disclaimer": "個人ポートフォリオの原型です。デモデータのみを使用します。Toyota、HINO、Hotai、販売店、顧客、政府機関による公式な承認を示すものではありません。",
      "scenario.openModule": "シナリオシミュレーターを開く",
      "scenario.label": "顧客シナリオシミュレーション",
      "scenario.title": "シナリオシミュレーター",
      "scenario.subtitle": "顧客の用途、ルート、エネルギー条件、運用上の感度を、教育、PoC、長期追跡、保留観察の層に整理します。",
      "scenario.demoDataset": "Demo Dataset",
      "scenario.prototypeSimulation": "Prototype Simulation",
      "scenario.humanReviewRequired": "Human Review Required",
      "scenario.boundaryTitle": "利用範囲",
      "scenario.boundaryBody": "このシミュレーターはポートフォリオ用プロトタイプです。公式の調達、設計、法務、製品導入判断ツールではありません。",
      "scenario.presetTitle": "顧客シナリオを選択",
      "scenario.inputsTitle": "運用条件を調整",
      "scenario.outputsTitle": "戦略アウトプット",
      "scenario.selectedScenario": "現在のシナリオ",
      "scenario.recommendationLayers": "4つの戦略レイヤー",
      "scenario.flowTitle": "戦略フロー",
      "scenario.flowSummary": "現在のシナリオは {scenario}、リスク水準は {risk} です。近期教育 {near} 件、中期 PoC {medium} 件、長期追跡 {long} 件、保留技術 {deferred} 件を示しています。",
      "scenario.matrixTitle": "シナリオ条件マトリクス",
      "scenario.keyboardLabel": "キーボードとタップに対応",
      "scenario.layer.near": "近期の教育テーマ",
      "scenario.layer.medium": "中期の PoC 候補",
      "scenario.layer.long": "長期追跡技術",
      "scenario.layer.deferred": "保留観察技術",
      "scenario.layer.near.short": "教育",
      "scenario.layer.medium.short": "PoC",
      "scenario.layer.long.short": "追跡",
      "scenario.layer.deferred.short": "保留",
      "scenario.reasoningTitle": "商品企画上の考え方",
      "scenario.dealerEducationTitle": "販売店教育の提案",
      "scenario.interviewQuestionsTitle": "顧客ヒアリング項目",
      "scenario.dataGapsTitle": "データギャップ",
      "scenario.humanReviewTitle": "人による確認事項",
      "scenario.input.route_type": "ルート種別",
      "scenario.input.annual_mileage": "年間走行距離",
      "scenario.input.payload_level": "積載レベル",
      "scenario.input.depot_charging": "拠点充電の可用性",
      "scenario.input.downtime_sensitivity": "停止時間への感度",
      "scenario.input.esg_pressure": "ESG 圧力",
      "scenario.input.regulation_exposure": "規制影響度",
      "scenario.input.infrastructure_readiness": "インフラ成熟度",
      "scenario.option.urban_fixed": "都市固定ルート",
      "scenario.option.regional_mixed": "地域混合ルート",
      "scenario.option.site_variable": "現場変動ルート",
      "scenario.option.long_haul": "長距離幹線",
      "scenario.option.mixed_portfolio": "混合フリート",
      "scenario.option.closed_site": "閉域物流サイト",
      "scenario.option.low": "低",
      "scenario.option.medium": "中",
      "scenario.option.high": "高",
      "scenario.option.very_high": "非常に高い",
      "scenario.option.critical": "重大",
      "scenario.option.available": "利用可能",
      "scenario.option.partial": "一部利用可能",
      "scenario.option.limited": "制約あり",
      "scenario.option.light": "軽積載",
      "scenario.option.heavy": "高積載",
      "scenario.option.passenger": "旅客",
      "scenario.option.mixed": "混合",
      "scenario.riskTitle": "プロトタイプリスク表示",
      "scenario.risk.low": "低リスク",
      "scenario.risk.medium": "中リスク",
      "scenario.risk.high": "高リスク",
      "scenario.noRecommendations": "現在の条件では追加提案はありません。まずデータギャップを確認してください。",
      "scenario.loadError": "シナリオデータを読み込めませんでした。",
      "scenario.termLabel": "主要用語",
      "scenario.conditionsTitle": "現在の入力条件",
      "scenario.noLogoPolicyTitle": "ノーロゴ視覚方針",
      "scenario.noLogoPolicyBody": "このシミュレーターは抽象的なフローと図のみを使用し、実在ブランドロゴ、ナンバープレート、顧客名、公式ビジュアルは使用しません。",
      "scenario.disclaimerTitle": "Demo データの範囲",
      "scenario.disclaimerBody": "すべての出力は静的なデモ仮定です。正式利用前には、最新規制、車両仕様、エネルギー価格、ルートデータ、販売・サービス体制で検証してください。",
      "scenario.resetPreset": "このシナリオを適用",
      "energy.openModule": "エネルギーロードマップを開く",
      "energy.label": "エネルギー戦略ロードマップ",
      "energy.title": "エネルギーロードマップ",
      "energy.subtitle": "2026-2035 年の商品企画視点で、ディーゼル、ハイブリッド、BEV、FCEV、V2G、拠点エネルギー管理の条件、リスク、時期を比較します。",
      "energy.demoLabel": "Demo assumptions",
      "energy.caveat": "エネルギー経路は、ルート、走行距離、積載、補給インフラ、サービス網、政策、TCO クロスオーバー条件に左右されます。",
      "energy.boundaryTitle": "利用範囲",
      "energy.controlsTitle": "エネルギー条件を調整",
      "energy.powertrainTitle": "エネルギー経路を選択",
      "energy.selectedLabel": "現在のエネルギー経路",
      "energy.fitScore": "適合スコア",
      "energy.serviceReadiness": "サービス成熟度",
      "energy.residualWatch": "残価観察",
      "energy.timelineTitle": "2026-2035 エネルギー時期",
      "energy.crossoverTitle": "TCO クロスオーバー感度",
      "energy.depotTitle": "拠点充電容量の模式図",
      "energy.sohTitle": "SOH と残価観察",
      "energy.carbonTitle": "炭素影響の模式図",
      "energy.dependenciesTitle": "主要な依存条件",
      "energy.risksTitle": "リスクと延期条件",
      "energy.educationTitle": "販売店教育テーマ",
      "energy.suitabilityTitle": "顧客適合条件",
      "energy.timelineSummary": "ロードマップは、短期教育、中期 PoC、長期追跡、保留観察を 2026 年から 2035 年に配置します。選択中: {name}、現在の状態: {status}。",
      "energy.crossoverSummary": "Demo TCO 曲線は、現在条件での {name} の相対コスト推移を示します。インフラやサービス成熟度が弱いと交差時期は遅れます。",
      "energy.depotSummary": "拠点容量の模式図は、充電可用性、ルート安定性、年間走行距離を demo 負荷に変換したもので、企画議論用です。",
      "energy.carbonSummary": "炭素パネルは相対的な示意値です。正式利用には境界、活動データ、エネルギー係数の再確認が必要です。",
      "energy.input.route_predictability": "ルート予測可能性",
      "energy.input.annual_mileage": "年間走行距離",
      "energy.input.payload_level": "積載レベル",
      "energy.input.depot_charging": "拠点充電の可用性",
      "energy.input.energy_price_stability": "エネルギー価格安定性",
      "energy.input.service_readiness": "サービス成熟度",
      "energy.input.esg_pressure": "ESG 圧力",
      "energy.input.policy_support": "政策支援",
      "energy.option.low": "低",
      "energy.option.medium": "中",
      "energy.option.high": "高",
      "energy.option.very_high": "非常に高い",
      "energy.option.light": "軽積載",
      "energy.option.heavy": "高積載",
      "energy.option.passenger": "旅客",
      "energy.option.limited": "制約あり",
      "energy.option.partial": "一部利用可能",
      "energy.option.available": "利用可能",
      "energy.status.short_term_education": "短期教育",
      "energy.status.medium_term_poc": "中期 PoC",
      "energy.status.long_term_tracking": "長期追跡",
      "energy.status.deferred_observation": "保留観察",
      "energy.segment.education": "教育",
      "energy.segment.poc": "PoC",
      "energy.segment.tracking": "追跡",
      "energy.segment.defer": "保留",
      "energy.loadError": "エネルギーロードマップデータを読み込めませんでした。",
      "energy.noLogoPolicyTitle": "ノーロゴ視覚方針",
      "energy.noLogoPolicyBody": "エネルギー図表は抽象 SVG、カード、示意値のみを使用し、実在ブランドロゴ、ナンバープレート、顧客、公式ビジュアルは使用しません。",
      "energy.disclaimerTitle": "Demo データの範囲",
      "energy.disclaimerBody": "エネルギーコスト、炭素影響、SOH、残価、時期はすべて静的な demo 仮定です。正式利用前に最新根拠で確認してください。",
      "energy.keyboardLabel": "キーボードとタップに対応",
      "energy.svgLabel": "SVG",
      "energy.termLabel": "主要用語",
      "safety.openModule": "安全・ADAS ラボを開く",
      "safety.label": "安全教育とリスクコミュニケーション",
      "safety.title": "安全・ADAS ラボ",
      "safety.subtitle": "AEB、死角検知、周囲表示、疲労警報、V2X、運転行動分析、エッジセンシングを、商品企画、販売店教育、顧客価値、制約説明へ変換します。",
      "safety.demoLabel": "Demo assumptions",
      "safety.caveat": "ADAS は運転支援であり、事故ゼロや自動運転の約束ではありません。適合性は車型、場面、感知条件、運転者教育、規制に左右されます。",
      "safety.functionLibrary": "安全機能ライブラリ",
      "safety.selectedLabel": "現在の安全機能",
      "safety.technicalFunction": "技術機能",
      "safety.customerValue": "顧客価値",
      "safety.driverEducationValue": "運転者教育価値",
      "safety.vehicleSegments": "適合車型・顧客",
      "safety.scenarios": "適合場面",
      "safety.limitations": "システム制約",
      "safety.doNotOverclaim": "過度に主張しないこと",
      "safety.planningImplications": "商品企画上の含意",
      "safety.dealerEducationMaterials": "販売店教育素材",
      "safety.customerFAQ": "顧客 FAQ",
      "safety.riskHeatMapTitle": "リスクヒートマップ",
      "safety.riskHeatMapSummary": "{name} の最も高い demo リスクは {metric}、スコアは {score} です。これは教育と確認の優先度であり、安全性能認証ではありません。",
      "safety.risk.low": "低リスク",
      "safety.risk.medium": "中リスク",
      "safety.risk.high": "高リスク",
      "safety.metric.overrelianceRisk": "過信リスク",
      "safety.metric.sensingBoundary": "感知境界",
      "safety.metric.trainingNeed": "訓練必要度",
      "safety.metric.dataGovernance": "データガバナンス",
      "safety.metric.scenarioComplexity": "場面複雑度",
      "safety.boundaryTitle": "利用範囲",
      "safety.loadError": "安全・ADAS データを読み込めませんでした。",
      "safety.noLogoPolicyTitle": "ノーロゴ視覚方針",
      "safety.noLogoPolicyBody": "このページは抽象カードとリスク模式図のみを使用し、実在ブランドロゴ、ナンバープレート、顧客、公式画像、事故場面の描写は使用しません。",
      "safety.disclaimerTitle": "責任コミュニケーションの範囲",
      "safety.disclaimerBody": "すべての安全機能コピーは demo 教育文です。正式利用前に、実車仕様、取扱説明書、規制、試験データ、販売チャネル教育内容で確認してください。",
      "safety.keyboardLabel": "キーボードとタップに対応",
      "safety.termLabel": "主要用語",
      "safety.faqQuestion": "質問",
      "safety.faqAnswer": "回答",
      "fleet.openModule": "コネクテッドフリートラボを開く",
      "fleet.label": "フリートデータサービスラボ",
      "fleet.title": "コネクテッドフリートラボ",
      "fleet.subtitle": "商用車の商品企画が、ハードウェアから FMS、遠隔診断、予知保全、稼働率支援、炭素追跡、運用効率、顧客レポートへ広がる流れを示します。",
      "fleet.demoLabel": "Demo assumptions",
      "fleet.privacyCaveat": "このページは実車や顧客データを収集、送信、分析しません。すべての数値とフローは静的な demo 仮定です。",
      "fleet.moduleLibrary": "フリートサービスモジュール",
      "fleet.selectedLabel": "現在のサービスモジュール",
      "fleet.flowTitle": "コネクテッドフリートのデータフロー",
      "fleet.flowSummary": "データフローは車両信号から始まり、データ整理、分析、サービス行動、販売店支援、顧客レポートへ進みます。選択中: {name}。",
      "fleet.dataInputs": "データ入力",
      "fleet.customerValue": "顧客価値",
      "fleet.planningValue": "商品企画価値",
      "fleet.serviceRequirements": "サービス・ガバナンス要件",
      "fleet.riskNotes": "リスク注意",
      "fleet.dealerEducation": "販売店教育メモ",
      "fleet.reportOutputs": "レポート出力",
      "fleet.governanceTitle": "プライバシーとデータガバナンスの注意",
      "fleet.governanceBody": "正式な FMS やフリートデータサービスには、顧客同意、項目定義、保存ルール、人による確認、サイバーセキュリティ、販売店責任境界が必要です。このサイトは API やライブテレメトリーに接続しません。",
      "fleet.noLogoPolicyTitle": "ノーロゴ視覚方針",
      "fleet.noLogoPolicyBody": "データフローは抽象ノードとカードのみを使用し、実在ブランドロゴ、ナンバープレート、顧客名、車両 ID、公式画面キャプチャは使用しません。",
      "fleet.disclaimerTitle": "Demo データの範囲",
      "fleet.disclaimerBody": "すべてのコネクテッドフリートモジュール内容は demo 教育・企画仮定です。正式商用前には契約、規制、サイバーセキュリティ、顧客業務、販売店能力で確認してください。",
      "fleet.maturity.near_term_education": "近期教育",
      "fleet.maturity.medium_term_poc": "中期 PoC",
      "fleet.maturity.long_term_tracking": "長期追跡",
      "fleet.maturity.deferred_observation": "保留観察",
      "fleet.risk.low": "低リスク",
      "fleet.risk.medium": "中リスク",
      "fleet.risk.high": "高リスク",
      "fleet.riskScore": "ガバナンスリスクスコア",
      "fleet.loadError": "コネクテッドフリートデータを読み込めませんでした。",
      "fleet.keyboardLabel": "キーボードとタップに対応",
      "fleet.termLabel": "主要用語",
      "fleet.svgLabel": "SVG",
      "esg.openModule": "ESG・政策ダッシュボードを開く",
      "esg.label": "ESG、政策、炭素追跡",
      "esg.title": "ESG・政策ダッシュボード",
      "esg.subtitle": "エネルギー転換、炭素追跡、ディーゼル代替シグナル、補助・政策モニタリング、企業のサステナビリティ開示、フリート脱炭素圧力を商品企画の入力に整理します。",
      "esg.demoLabel": "Demo assumptions",
      "esg.verificationCaveat": "政策、補助、炭素係数は最新出典の確認が必要です。このページは法務、会計、正式開示の助言ではありません。",
      "esg.signalLibrary": "政策・炭素シグナル",
      "esg.selectedSignal": "現在のシグナル",
      "esg.carbonEstimator": "Demo 炭素推計パネル",
      "esg.controlsTitle": "推計条件",
      "esg.carbonSummary": "デモ条件では、ディーゼル基準は約 {baseline} tCO2e、代替ミックスは約 {modeled} tCO2e、差分は {difference} tCO2e です。これは検証済み削減ではありません。",
      "esg.policyTimeline": "2026-2035 モニタリングタイムライン",
      "esg.actionRecommendations": "行動提案",
      "esg.sourceConfidence": "出典信頼度",
      "esg.updatePlaceholder": "更新日プレースホルダー",
      "esg.sourceStatus": "出典状態",
      "esg.planningUse": "企画用途",
      "esg.limitation": "制約メモ",
      "esg.actions": "推奨行動",
      "esg.signalScore": "シグナルスコア",
      "esg.metric.policyReadiness": "政策準備度",
      "esg.metric.carbonInfluence": "炭素影響度",
      "esg.metric.customerPressure": "顧客圧力",
      "esg.metric.dataReadiness": "データ準備度",
      "esg.input.annualMileage": "年間走行距離",
      "esg.input.dieselIntensity": "ディーゼル使用強度",
      "esg.input.electricIntensity": "電力消費強度",
      "esg.input.renewableShare": "再生可能電力比率",
      "esg.input.replacementShare": "代替比率",
      "esg.option.low": "低",
      "esg.option.medium": "中",
      "esg.option.high": "高",
      "esg.option.light": "軽負荷",
      "esg.option.heavy": "重負荷",
      "esg.option.efficient": "高効率",
      "esg.option.pilot": "試験導入",
      "esg.option.partial": "部分代替",
      "esg.option.focused": "集中代替",
      "esg.baselineDiesel": "ディーゼル基準",
      "esg.modeledFleet": "代替ミックス",
      "esg.demoDifference": "Demo 差分",
      "esg.carbonWarning": "この推計はデモ係数を使用します。正式開示には燃料データ、電力係数、再生可能電力比率、稼働サイクル、走行距離、積載、算定方法の確認が必要です。",
      "esg.confidence.low": "低信頼度",
      "esg.confidence.medium": "中信頼度",
      "esg.confidence.high": "高信頼度",
      "esg.status.latest_verification_required": "最新確認が必要",
      "esg.status.demo_assumption": "Demo 仮定",
      "esg.status.simulated_source": "模擬出典",
      "esg.status.source_placeholder": "出典プレースホルダー",
      "esg.methodologyTitle": "表現と算定のガードレール",
      "esg.methodologyBody": "このページは仕組みと必要データのみを説明します。検証済み削減は主張しません。正式利用には最新政策出典、企業の算定方法、法務・コンプライアンス確認、人による確認が必要です。",
      "esg.noLogoPolicyTitle": "ノーロゴ視覚方針",
      "esg.noLogoPolicyBody": "このダッシュボードは抽象カード、SVG、デモ値のみを使用します。公式マーク、政府画面キャプチャ、顧客名、ナンバープレート、実排出報告は使用しません。",
      "esg.disclaimerTitle": "Demo データの範囲",
      "esg.disclaimerBody": "すべての政策、補助、炭素推計、レポート需要は demo 企画素材です。調達、法務、会計、コンプライアンス、正式なサステナビリティ開示の根拠にはできません。",
      "esg.keyboardLabel": "キーボードとタップに対応",
      "esg.termLabel": "主要用語",
      "esg.svgLabel": "SVG",
      "esg.loadError": "ESG・政策データを読み込めませんでした。",
      "downloads.proposal": "プロジェクト提案書",
      "visual.dynamicModuleLabel": "インタラクティブ視覚モジュール",
      "visual.expandImage": "画像を拡大",
      "visual.lightboxAria": "拡大画像プレビュー",
      "visual.closeImage": "拡大画像を閉じる",
      "visual.maturityImageTitle": "技術成熟度企画ワークショップ",
      "visual.scenarioImageTitle": "シナリオシミュレーター企画ワークショップ",
      "visual.energyImageTitle": "デポエネルギーロードマップ戦略",
      "visual.safetyImageTitle": "安全・ADAS教育ラボ",
      "visual.fleetImageTitle": "コネクテッドフリートサービスラボ",
      "visual.esgImageTitle": "ESG・政策戦略ダッシュボード",
      "dynamic.trend.title": "トレンドレーダーアニメーション",
      "dynamic.maturity.title": "技術成熟度四象限アニメーション",
      "dynamic.scenario.title": "シナリオシミュレーターインタラクティブマップ",
      "dynamic.energy.title": "エネルギーロードマップクロスオーバーアニメーション",
      "dynamic.safety.title": "安全・ADASリスク教育アニメーション",
      "dynamic.fleet.title": "コネクテッドフリートデータフローアニメーション",
      "dynamic.esg.title": "ESG政策・炭素シグナルアニメーション",
      "dynamic.roadmap.title": "戦略ロードマップタイムラインアニメーション"
    }
  },
  "data/imageAssetRegistry.json": {
    "schemaName": "Project 5 Image Asset Registry",
    "schemaVersion": "1.0.0",
    "pathPolicy": {
      "finalImageFormat": "jpg-first",
      "preferredPublicDirectory": "images/",
      "publicPathRule": "Use relative paths. Do not expose prompt paths or registry internals in visible public UI.",
      "brandSafetyRule": "Use generic commercial vehicle and strategy visuals only. No official logos, dealer marks, real license plates, customer records, or official UI screenshots."
    },
    "requiredFields": [
      "fileName",
      "path",
      "altZh",
      "altEn",
      "altJa",
      "promptPath",
      "phaseName",
      "moduleId",
      "conversionStatus",
      "usedInFiles"
    ],
    "assets": [
      {
        "fileName": "favicon.svg",
        "path": "./favicon.svg",
        "altZh": "商用車未來移動策略網站的介面識別圖示。",
        "altEn": "Interface mark for the future commercial mobility strategy site.",
        "altJa": "商用車の未来モビリティ戦略サイトのインターフェース識別アイコン。",
        "promptPath": "not-generated",
        "phaseName": "global-ux",
        "moduleId": "site-shell",
        "conversionStatus": "interface-svg",
        "usedInFiles": [
          "index.html"
        ]
      },
      {
        "fileName": "hero-future-mobility-strategy-lab.jpg",
        "path": "images/hero-future-mobility-strategy-lab.jpg",
        "altZh": "商用車商品企劃團隊在明亮策略室中整理能源、車聯網、安全與 ESG 路線圖。",
        "altEn": "Commercial vehicle product planners in a bright strategy room organizing energy, connected fleet, safety, and ESG roadmap signals.",
        "altJa": "明るい戦略室で商用車の商品企画チームがエネルギー、コネクテッドフリート、安全、ESG のロードマップ信号を整理している。",
        "promptPath": "prompts/static/hero-future-mobility-strategy-lab.md",
        "phaseName": "Phase 11",
        "moduleId": "home",
        "conversionStatus": "pending_generation",
        "usedInFiles": [
          "index.html"
        ]
      },
      {
        "fileName": "scenario-simulator-planning-workshop.jpg",
        "path": "images/scenario-simulator-planning-workshop.jpg",
        "altZh": "商品企劃人員與客戶在工作坊中比較路線、載重、停車時間與基礎設施條件。",
        "altEn": "Product planners and a customer workshop comparing route, payload, downtime, and infrastructure conditions.",
        "altJa": "商品企画担当と顧客がワークショップでルート、積載、停止時間、インフラ条件を比較している。",
        "promptPath": "prompts/static/scenario-simulator-planning-workshop.md",
        "phaseName": "Phase 11",
        "moduleId": "scenario-simulator",
        "conversionStatus": "pending_generation",
        "usedInFiles": [
          "index.html"
        ]
      },
      {
        "fileName": "energy-roadmap-depot-strategy.jpg",
        "path": "images/energy-roadmap-depot-strategy.jpg",
        "altZh": "泛用商用車停在明亮場站旁，團隊檢視充電、電池健康、TCO 與氫能追蹤條件。",
        "altEn": "Generic commercial vehicles at a bright depot while planners review charging, battery health, TCO, and hydrogen-tracking conditions.",
        "altJa": "明るい拠点で汎用商用車を前に、企画担当が充電、電池状態、TCO、水素追跡条件を確認している。",
        "promptPath": "prompts/static/energy-roadmap-depot-strategy.md",
        "phaseName": "Phase 11",
        "moduleId": "energy-roadmap",
        "conversionStatus": "pending_generation",
        "usedInFiles": [
          "index.html"
        ]
      },
      {
        "fileName": "safety-adas-education-lab.jpg",
        "path": "images/safety-adas-education-lab.jpg",
        "altZh": "通路教育場景中以泛用商用車示範 ADAS 限制、安全溝通與駕駛教育。",
        "altEn": "Dealer education scene using a generic commercial vehicle to explain ADAS limits, safety communication, and driver education.",
        "altJa": "販売チャネル教育の場面で、汎用商用車を使って ADAS の限界、安全コミュニケーション、ドライバー教育を説明している。",
        "promptPath": "prompts/static/safety-adas-education-lab.md",
        "phaseName": "Phase 11",
        "moduleId": "safety-adas-lab",
        "conversionStatus": "pending_generation",
        "usedInFiles": [
          "index.html"
        ]
      },
      {
        "fileName": "connected-fleet-service-lab.jpg",
        "path": "images/connected-fleet-service-lab.jpg",
        "altZh": "車聯網服務團隊在明亮營運室中檢視遠端診斷、保養排程與客戶報告。",
        "altEn": "Connected-fleet service team in a bright operations room reviewing remote diagnostics, maintenance scheduling, and customer reports.",
        "altJa": "明るい運用室でコネクテッドフリートのサービスチームが遠隔診断、保守計画、顧客レポートを確認している。",
        "promptPath": "prompts/static/connected-fleet-service-lab.md",
        "phaseName": "Phase 11",
        "moduleId": "connected-fleet-lab",
        "conversionStatus": "pending_generation",
        "usedInFiles": [
          "index.html"
        ]
      },
      {
        "fileName": "esg-policy-strategy-dashboard.jpg",
        "path": "images/esg-policy-strategy-dashboard.jpg",
        "altZh": "策略團隊在顧問式儀表板前討論 ESG、政策來源、碳估算與人工審查。",
        "altEn": "Strategy team discussing ESG, policy sources, carbon estimation, and human review in front of a consulting-style dashboard.",
        "altJa": "コンサルティング風のダッシュボードの前で、戦略チームが ESG、政策出典、炭素推計、人による確認を議論している。",
        "promptPath": "prompts/static/esg-policy-strategy-dashboard.md",
        "phaseName": "Phase 11",
        "moduleId": "esg-policy-dashboard",
        "conversionStatus": "pending_generation",
        "usedInFiles": [
          "index.html"
        ]
      },
      {
        "fileName": "strategy-roadmap-studio-workshop.jpg",
        "path": "images/strategy-roadmap-studio-workshop.jpg",
        "altZh": "商品企劃團隊把 2026 至 2035 的教育、PoC、成熟化與長期追蹤整理成策略路線圖。",
        "altEn": "Product-planning team organizing education, PoC, maturity, and long-term tracking into a 2026 to 2035 strategy roadmap.",
        "altJa": "商品企画チームが教育、PoC、成熟化、長期追跡を 2026 から 2035 年の戦略ロードマップに整理している。",
        "promptPath": "prompts/static/strategy-roadmap-studio-workshop.md",
        "phaseName": "Phase 11",
        "moduleId": "strategy-roadmap-studio",
        "conversionStatus": "pending_generation",
        "usedInFiles": [
          "index.html"
        ]
      },
      {
        "fileName": "trend-radar-animation.svg",
        "path": "inline-svg-canvas",
        "altZh": "互動式資料視覺以抽象圖形呈現商用車策略假設、限制與人工審查。",
        "altEn": "Interactive data visual using abstract graphics to show commercial vehicle strategy assumptions, limits, and human review.",
        "altJa": "抽象的な図形で商用車戦略の仮説、制約、人による確認を示すインタラクティブなデータビジュアル。",
        "promptPath": "prompts/dynamic/trend-radar-animation.md",
        "phaseName": "Phase 11",
        "moduleId": "trend-radar",
        "conversionStatus": "dynamic_prompt_ready",
        "usedInFiles": [
          "index.html",
          "assets/js/trend-radar.js"
        ]
      },
      {
        "fileName": "technology-maturity-quadrant-animation.svg",
        "path": "inline-svg-canvas",
        "altZh": "互動式資料視覺以抽象圖形呈現商用車策略假設、限制與人工審查。",
        "altEn": "Interactive data visual using abstract graphics to show commercial vehicle strategy assumptions, limits, and human review.",
        "altJa": "抽象的な図形で商用車戦略の仮説、制約、人による確認を示すインタラクティブなデータビジュアル。",
        "promptPath": "prompts/dynamic/technology-maturity-quadrant-animation.md",
        "phaseName": "Phase 11",
        "moduleId": "technology-maturity-map",
        "conversionStatus": "dynamic_prompt_ready",
        "usedInFiles": [
          "index.html",
          "assets/js/technology-maturity.js"
        ]
      },
      {
        "fileName": "scenario-simulator-interactive-map.html5",
        "path": "inline-svg-canvas",
        "altZh": "互動式資料視覺以抽象圖形呈現商用車策略假設、限制與人工審查。",
        "altEn": "Interactive data visual using abstract graphics to show commercial vehicle strategy assumptions, limits, and human review.",
        "altJa": "抽象的な図形で商用車戦略の仮説、制約、人による確認を示すインタラクティブなデータビジュアル。",
        "promptPath": "prompts/dynamic/scenario-simulator-interactive-map.md",
        "phaseName": "Phase 11",
        "moduleId": "scenario-simulator",
        "conversionStatus": "dynamic_prompt_ready",
        "usedInFiles": [
          "index.html",
          "assets/js/scenario-simulator.js"
        ]
      },
      {
        "fileName": "energy-roadmap-crossover-animation.canvas",
        "path": "inline-svg-canvas",
        "altZh": "互動式資料視覺以抽象圖形呈現商用車策略假設、限制與人工審查。",
        "altEn": "Interactive data visual using abstract graphics to show commercial vehicle strategy assumptions, limits, and human review.",
        "altJa": "抽象的な図形で商用車戦略の仮説、制約、人による確認を示すインタラクティブなデータビジュアル。",
        "promptPath": "prompts/dynamic/energy-roadmap-crossover-animation.md",
        "phaseName": "Phase 11",
        "moduleId": "energy-roadmap",
        "conversionStatus": "dynamic_prompt_ready",
        "usedInFiles": [
          "index.html",
          "assets/js/energy-roadmap.js"
        ]
      },
      {
        "fileName": "safety-adas-risk-education-animation.svg",
        "path": "inline-svg-canvas",
        "altZh": "互動式資料視覺以抽象圖形呈現商用車策略假設、限制與人工審查。",
        "altEn": "Interactive data visual using abstract graphics to show commercial vehicle strategy assumptions, limits, and human review.",
        "altJa": "抽象的な図形で商用車戦略の仮説、制約、人による確認を示すインタラクティブなデータビジュアル。",
        "promptPath": "prompts/dynamic/safety-adas-risk-education-animation.md",
        "phaseName": "Phase 11",
        "moduleId": "safety-adas-lab",
        "conversionStatus": "dynamic_prompt_ready",
        "usedInFiles": [
          "index.html",
          "assets/js/safety-adas.js"
        ]
      },
      {
        "fileName": "connected-fleet-data-flow-animation.svg",
        "path": "inline-svg-canvas",
        "altZh": "互動式資料視覺以抽象圖形呈現商用車策略假設、限制與人工審查。",
        "altEn": "Interactive data visual using abstract graphics to show commercial vehicle strategy assumptions, limits, and human review.",
        "altJa": "抽象的な図形で商用車戦略の仮説、制約、人による確認を示すインタラクティブなデータビジュアル。",
        "promptPath": "prompts/dynamic/connected-fleet-data-flow-animation.md",
        "phaseName": "Phase 11",
        "moduleId": "connected-fleet-lab",
        "conversionStatus": "dynamic_prompt_ready",
        "usedInFiles": [
          "index.html",
          "assets/js/connected-fleet.js"
        ]
      },
      {
        "fileName": "esg-policy-carbon-signal-animation.svg",
        "path": "inline-svg-canvas",
        "altZh": "互動式資料視覺以抽象圖形呈現商用車策略假設、限制與人工審查。",
        "altEn": "Interactive data visual using abstract graphics to show commercial vehicle strategy assumptions, limits, and human review.",
        "altJa": "抽象的な図形で商用車戦略の仮説、制約、人による確認を示すインタラクティブなデータビジュアル。",
        "promptPath": "prompts/dynamic/esg-policy-carbon-signal-animation.md",
        "phaseName": "Phase 11",
        "moduleId": "esg-policy-dashboard",
        "conversionStatus": "dynamic_prompt_ready",
        "usedInFiles": [
          "index.html",
          "assets/js/esg-policy.js"
        ]
      },
      {
        "fileName": "strategy-roadmap-timeline-animation.svg",
        "path": "inline-svg-canvas",
        "altZh": "互動式資料視覺以抽象圖形呈現商用車策略假設、限制與人工審查。",
        "altEn": "Interactive data visual using abstract graphics to show commercial vehicle strategy assumptions, limits, and human review.",
        "altJa": "抽象的な図形で商用車戦略の仮説、制約、人による確認を示すインタラクティブなデータビジュアル。",
        "promptPath": "prompts/dynamic/strategy-roadmap-timeline-animation.md",
        "phaseName": "Phase 11",
        "moduleId": "strategy-roadmap-studio",
        "conversionStatus": "dynamic_prompt_ready",
        "usedInFiles": [
          "index.html",
          "assets/js/strategy-roadmap.js"
        ]
      }
    ]
  },
  "data/safety_adas_lab.json": {
    "meta": {
      "schemaVersion": "1.0.0",
      "moduleId": "safety-adas-lab",
      "dataStatus": "demo_assumptions",
      "sourceBasis": "Portfolio proposal safety and ADAS education narrative converted into a static product-planning prototype.",
      "publicBoundary": {
        "zh": "本安全與 ADAS 實驗室僅為作品集 demo 假設，不是官方安全認證、法規解讀、事故責任判斷或車輛功能承諾。",
        "en": "This Safety & ADAS Lab uses portfolio demo assumptions only. It is not an official safety certification, legal interpretation, accident-liability assessment, or vehicle-feature commitment.",
        "ja": "この安全・ADAS ラボはポートフォリオ用のデモ仮定です。公式の安全認証、法規解釈、事故責任判断、車両機能の約束ではありません。"
      }
    },
    "riskMetrics": [
      "overrelianceRisk",
      "sensingBoundary",
      "trainingNeed",
      "dataGovernance",
      "scenarioComplexity"
    ],
    "modules": [
      {
        "id": "aeb_collision_mitigation",
        "category": "collision_mitigation",
        "riskLevel": "medium",
        "glossaryTerms": [
          "adas",
          "aeb"
        ],
        "name": {
          "zh": "AEB 前方碰撞緩解",
          "en": "AEB forward collision mitigation",
          "ja": "AEB 前方衝突被害軽減"
        },
        "technicalFunction": {
          "zh": "使用前向感測器偵測可能碰撞風險，於特定條件下提醒駕駛並輔助煞車。",
          "en": "Uses forward sensing to detect potential collision risk and, under defined conditions, warn the driver and assist braking.",
          "ja": "前方センサーで衝突リスクを検知し、定められた条件下で警報と制動支援を行います。"
        },
        "customerValue": {
          "zh": "可作為高里程、市區配送與車隊安全教育的核心功能，但價值取決於場景、車速、載重與駕駛反應。",
          "en": "Can support safety education for high-mileage, urban-delivery, and fleet operations, while value depends on scene, speed, payload, and driver response.",
          "ja": "高走行距離、都市配送、フリート運用の安全教育を支援しますが、価値は場面、速度、積載、運転者反応に左右されます。"
        },
        "driverEducationValue": {
          "zh": "教育重點是系統為輔助，不取代安全距離、預判與駕駛責任。",
          "en": "Education should frame the system as assistance, not a replacement for safe distance, anticipation, and driver responsibility.",
          "ja": "安全距離、予測運転、運転者責任を置き換えるものではなく、支援機能として説明します。"
        },
        "vehicleSegments": {
          "zh": [
            "市區配送車",
            "中小型貨車",
            "巴士與接駁車"
          ],
          "en": [
            "Urban delivery trucks",
            "Light and medium trucks",
            "Buses and shuttles"
          ],
          "ja": [
            "都市配送車",
            "小中型トラック",
            "バス・シャトル"
          ]
        },
        "scenarios": {
          "zh": [
            "市區跟車",
            "低速壅塞",
            "配送巷口",
            "固定路線訓練"
          ],
          "en": [
            "Urban following",
            "Low-speed congestion",
            "Delivery intersections",
            "Fixed-route training"
          ],
          "ja": [
            "都市部の追従",
            "低速渋滞",
            "配送交差点",
            "固定ルート訓練"
          ]
        },
        "limitations": {
          "zh": [
            "感測器視線、天候、路面、車速與載重會影響效果。",
            "不應承諾能避免所有碰撞或取代駕駛判斷。"
          ],
          "en": [
            "Sensor line-of-sight, weather, road surface, speed, and payload can affect performance.",
            "It should not be claimed to prevent all collisions or replace driver judgment."
          ],
          "ja": [
            "センサー視界、天候、路面、速度、積載が性能に影響します。",
            "すべての衝突を防ぐ、または運転判断を置き換えると説明してはいけません。"
          ]
        },
        "doNotOverclaim": {
          "zh": [
            "避免使用「零事故」或「自動駕駛煞車」等說法。",
            "不可暗示系統在所有車速、載重與天候下都同樣有效。"
          ],
          "en": [
            "Avoid phrases such as \"zero accidents\" or \"autonomous braking.\".",
            "Do not imply equal effectiveness across every speed, payload, and weather condition."
          ],
          "ja": [
            "「事故ゼロ」や「自動運転ブレーキ」のような表現を避けます。",
            "すべての速度、積載、天候で同じ効果があると示唆しません。"
          ]
        },
        "planningImplications": {
          "zh": [
            "把 AEB 放入交車教育與駕駛訓練，而不是只列為規格配備。",
            "PoC 應蒐集誤警報、駕駛接受度、保養校正與場景限制。"
          ],
          "en": [
            "Place AEB in handover education and driver training, not only in the specification list.",
            "A PoC should collect false-warning feedback, driver acceptance, calibration service needs, and scene limits."
          ],
          "ja": [
            "AEB を仕様表だけでなく、納車教育と運転者訓練に組み込みます。",
            "PoC では誤警報、運転者受容、校正整備、場面制約を収集します。"
          ]
        },
        "dealerEducationMaterials": {
          "zh": [
            "一頁式系統限制說明",
            "交車檢核表",
            "駕駛情境問答卡"
          ],
          "en": [
            "One-page system-limit sheet",
            "Delivery checklist",
            "Driver scenario FAQ card"
          ],
          "ja": [
            "システム限界の1枚資料",
            "納車チェックリスト",
            "運転場面 FAQ カード"
          ]
        },
        "customerFAQ": [
          {
            "q": {
              "zh": "AEB 能避免所有追撞嗎？",
              "en": "Can AEB prevent every rear-end collision?",
              "ja": "AEB はすべての追突を防げますか？"
            },
            "a": {
              "zh": "不能這樣承諾。它是在特定條件下提供警示與煞車輔助，駕駛仍需保持安全距離與注意。",
              "en": "No. It provides warning and braking assistance under defined conditions; the driver must still keep distance and attention.",
              "ja": "そのような約束はできません。定められた条件下で警報と制動支援を行う機能であり、運転者は距離と注意を維持する必要があります。"
            }
          }
        ],
        "riskScores": {
          "overrelianceRisk": 78,
          "sensingBoundary": 74,
          "trainingNeed": 82,
          "dataGovernance": 36,
          "scenarioComplexity": 70
        }
      },
      {
        "id": "blind_spot_detection",
        "category": "side_awareness",
        "riskLevel": "medium",
        "glossaryTerms": [
          "adas"
        ],
        "name": {
          "zh": "盲點偵測與側向警示",
          "en": "Blind spot detection and side warning",
          "ja": "死角検知と側方警報"
        },
        "technicalFunction": {
          "zh": "偵測車側或後側區域的物體與車輛，提醒變換車道或轉彎時的側向風險。",
          "en": "Detects objects or vehicles near the side and rear-side zones to warn of lateral risk during lane changes or turns.",
          "ja": "側方・後側方の物体や車両を検知し、車線変更や右左折時の側方リスクを知らせます。"
        },
        "customerValue": {
          "zh": "對車身長、視野死角多、常進出市區或工地的商用車有教育價值。",
          "en": "Useful for educating fleets with longer bodies, larger blind zones, urban access, or construction-site movement.",
          "ja": "車体が長く死角が大きい車両、都市部や建設現場を出入りするフリートの教育に有効です。"
        },
        "driverEducationValue": {
          "zh": "強調後視鏡、轉頭確認與系統警示需並行使用，不應只依賴燈號或聲響。",
          "en": "Emphasize mirror use, shoulder checks, and system alerts together; drivers should not rely only on lights or sounds.",
          "ja": "ミラー確認、目視確認、システム警報を併用し、ランプや音だけに依存しないよう説明します。"
        },
        "vehicleSegments": {
          "zh": [
            "廂式貨車",
            "冷鏈車",
            "工地車",
            "巴士"
          ],
          "en": [
            "Box trucks",
            "Cold-chain vehicles",
            "Construction vehicles",
            "Buses"
          ],
          "ja": [
            "箱型トラック",
            "冷蔵・冷凍車",
            "建設車両",
            "バス"
          ]
        },
        "scenarios": {
          "zh": [
            "市區轉彎",
            "機車與自行車混流",
            "工地進出",
            "車道變換"
          ],
          "en": [
            "Urban turns",
            "Mixed motorcycle and bicycle traffic",
            "Site entry and exit",
            "Lane changes"
          ],
          "ja": [
            "都市部の右左折",
            "二輪・自転車混在交通",
            "現場出入り",
            "車線変更"
          ]
        },
        "limitations": {
          "zh": [
            "小型物體、遮蔽、惡劣天候與感測器髒污會影響偵測。",
            "警示不等於駕駛可不確認周邊。"
          ],
          "en": [
            "Small objects, occlusion, severe weather, and dirty sensors can affect detection.",
            "A warning does not mean the driver can skip surrounding checks."
          ],
          "ja": [
            "小さな物体、遮蔽、悪天候、センサー汚れが検知に影響します。",
            "警報があるから周囲確認を省略できるわけではありません。"
          ]
        },
        "doNotOverclaim": {
          "zh": [
            "避免宣稱能消除所有轉彎事故。",
            "不可把警示功能描述成自動避讓。"
          ],
          "en": [
            "Avoid claiming it eliminates every turning accident.",
            "Do not describe warning as automatic avoidance."
          ],
          "ja": [
            "すべての右左折事故をなくすと表現しません。",
            "警報機能を自動回避として説明しません。"
          ]
        },
        "planningImplications": {
          "zh": [
            "適合與車身視野、鏡位調整、駕駛訓練一起規劃。",
            "客戶訪談需確認常見混流場景與事故近失事件。"
          ],
          "en": [
            "Plan it with body visibility, mirror adjustment, and driver training.",
            "Customer interviews should verify mixed-traffic scenes and near-miss history."
          ],
          "ja": [
            "車体視界、ミラー調整、運転者訓練と一緒に企画します。",
            "顧客ヒアリングでは混在交通場面とヒヤリハット履歴を確認します。"
          ]
        },
        "dealerEducationMaterials": {
          "zh": [
            "側向風險情境圖",
            "感測器清潔提醒",
            "試乘示範話術"
          ],
          "en": [
            "Side-risk scenario diagram",
            "Sensor-cleaning reminder",
            "Demo-drive talk track"
          ],
          "ja": [
            "側方リスク場面図",
            "センサー清掃リマインダー",
            "試乗説明トーク"
          ]
        },
        "customerFAQ": [
          {
            "q": {
              "zh": "警示亮起時可以直接轉向嗎？",
              "en": "Can the driver turn as soon as the alert clears?",
              "ja": "警報が消えたらすぐ曲がってよいですか？"
            },
            "a": {
              "zh": "不建議這樣教。警示只是輔助資訊，仍需鏡面、目視與路況確認。",
              "en": "No. The alert is supporting information; mirror, visual, and road-condition checks remain necessary.",
              "ja": "そのようには教えません。警報は補助情報であり、ミラー、目視、道路状況の確認が必要です。"
            }
          }
        ],
        "riskScores": {
          "overrelianceRisk": 72,
          "sensingBoundary": 70,
          "trainingNeed": 76,
          "dataGovernance": 28,
          "scenarioComplexity": 82
        }
      },
      {
        "id": "surround_view_maneuvering",
        "category": "low_speed_awareness",
        "riskLevel": "low",
        "glossaryTerms": [
          "adas"
        ],
        "name": {
          "zh": "環景影像與低速機動輔助",
          "en": "Surround view and low-speed maneuvering assist",
          "ja": "周囲表示と低速取り回し支援"
        },
        "technicalFunction": {
          "zh": "整合多個攝影機影像，協助駕駛理解車輛周圍與停車/倒車空間。",
          "en": "Combines camera views to help the driver understand surroundings during parking, reversing, and low-speed maneuvers.",
          "ja": "複数カメラ映像を統合し、駐車、後退、低速取り回し時の周囲把握を支援します。"
        },
        "customerValue": {
          "zh": "可降低低速操作壓力，適合配送、冷鏈、停車空間狹窄與駕駛輪替頻繁的車隊。",
          "en": "Can reduce low-speed maneuvering stress for delivery, cold-chain, tight parking, and fleets with frequent driver rotation.",
          "ja": "配送、冷蔵・冷凍、狭い駐車場、運転者交替が多いフリートの低速操作ストレスを下げる可能性があります。"
        },
        "driverEducationValue": {
          "zh": "教育影像比例、盲區、鏡頭清潔與下車確認條件。",
          "en": "Teach image scale, blind zones, camera cleaning, and when physical confirmation is required.",
          "ja": "映像の距離感、死角、カメラ清掃、必要な下車確認条件を教育します。"
        },
        "vehicleSegments": {
          "zh": [
            "市區配送車",
            "冷鏈車",
            "租賃車隊",
            "巴士"
          ],
          "en": [
            "Urban delivery vehicles",
            "Cold-chain vehicles",
            "Leasing fleets",
            "Buses"
          ],
          "ja": [
            "都市配送車",
            "冷蔵・冷凍車",
            "リースフリート",
            "バス"
          ]
        },
        "scenarios": {
          "zh": [
            "倒車入庫",
            "狹窄巷弄",
            "裝卸區",
            "夜間停車"
          ],
          "en": [
            "Reversing into docks",
            "Narrow lanes",
            "Loading areas",
            "Night parking"
          ],
          "ja": [
            "バック入庫",
            "狭い路地",
            "積み下ろしエリア",
            "夜間駐車"
          ]
        },
        "limitations": {
          "zh": [
            "鏡頭汙損、光線、雨霧與顯示延遲會影響判讀。",
            "畫面不是完整安全保證，仍需低速與確認。"
          ],
          "en": [
            "Dirty cameras, lighting, rain, fog, and display delay can affect interpretation.",
            "The view is not a full safety guarantee; low speed and confirmation remain necessary."
          ],
          "ja": [
            "カメラ汚れ、光、雨霧、表示遅延が判断に影響します。",
            "画面は完全な安全保証ではなく、低速操作と確認が必要です。"
          ]
        },
        "doNotOverclaim": {
          "zh": [
            "避免說成沒有盲區。",
            "不可宣稱可取代倒車導引或現場安全員。"
          ],
          "en": [
            "Do not claim there are no blind spots.",
            "Do not claim it replaces spotters or site safety staff."
          ],
          "ja": [
            "死角がないと説明しません。",
            "誘導員や現場安全担当を置き換えると説明しません。"
          ]
        },
        "planningImplications": {
          "zh": [
            "可作為入門安全教育素材，降低新手駕駛學習負擔。",
            "需規劃鏡頭維護、顯示介面與夜間/雨天情境說明。"
          ],
          "en": [
            "Can serve as entry-level safety education and reduce new-driver learning burden.",
            "Plan camera maintenance, display interface, and night/rain explanation."
          ],
          "ja": [
            "初級安全教育素材として、新人運転者の学習負担を下げられます。",
            "カメラ保守、表示 UI、夜間・雨天説明を計画します。"
          ]
        },
        "dealerEducationMaterials": {
          "zh": [
            "環景校正檢核",
            "倒車教學卡",
            "鏡頭清潔 SOP"
          ],
          "en": [
            "Surround-view calibration check",
            "Reversing education card",
            "Camera-cleaning SOP"
          ],
          "ja": [
            "周囲表示校正チェック",
            "後退教育カード",
            "カメラ清掃 SOP"
          ]
        },
        "customerFAQ": [
          {
            "q": {
              "zh": "環景影像是否代表完全沒有死角？",
              "en": "Does surround view mean there are no blind spots?",
              "ja": "周囲表示なら死角は完全になくなりますか？"
            },
            "a": {
              "zh": "不是。它改善低速判讀，但鏡頭、顯示與現場條件仍有邊界。",
              "en": "No. It improves low-speed interpretation, but cameras, display, and site conditions still have boundaries.",
              "ja": "いいえ。低速時の把握を助けますが、カメラ、表示、現場条件には限界があります。"
            }
          }
        ],
        "riskScores": {
          "overrelianceRisk": 58,
          "sensingBoundary": 64,
          "trainingNeed": 62,
          "dataGovernance": 20,
          "scenarioComplexity": 62
        }
      },
      {
        "id": "fatigue_warning",
        "category": "driver_condition",
        "riskLevel": "medium",
        "glossaryTerms": [
          "adas"
        ],
        "name": {
          "zh": "疲勞警示與駕駛狀態提醒",
          "en": "Fatigue warning and driver-state reminder",
          "ja": "疲労警報と運転状態リマインダー"
        },
        "technicalFunction": {
          "zh": "依方向盤操作、行駛型態或駕駛狀態訊號，提醒可能疲勞或注意力下降。",
          "en": "Uses steering, driving pattern, or driver-state signals to remind drivers of possible fatigue or reduced attention.",
          "ja": "操舵、走行パターン、運転状態信号から、疲労や注意低下の可能性を知らせます。"
        },
        "customerValue": {
          "zh": "適合長工時、夜間、巴士、長途與高頻配送車隊作為安全管理溝通題材。",
          "en": "Useful for safety-management communication in long-hour, night, bus, long-haul, and high-frequency delivery operations.",
          "ja": "長時間、夜間、バス、長距離、高頻度配送の安全管理コミュニケーションに有効です。"
        },
        "driverEducationValue": {
          "zh": "把提醒連到休息制度與班表管理，不應當成監控或懲罰工具。",
          "en": "Connect reminders to rest policy and scheduling, not surveillance or punishment.",
          "ja": "警報を休憩制度と勤務計画につなげ、監視や罰則の道具として扱わないよう説明します。"
        },
        "vehicleSegments": {
          "zh": [
            "長途貨運",
            "巴士",
            "冷鏈",
            "高頻配送"
          ],
          "en": [
            "Long-haul freight",
            "Buses",
            "Cold chain",
            "High-frequency delivery"
          ],
          "ja": [
            "長距離貨物",
            "バス",
            "冷蔵・冷凍",
            "高頻度配送"
          ]
        },
        "scenarios": {
          "zh": [
            "夜間行駛",
            "長時間班次",
            "高速道路",
            "多點配送"
          ],
          "en": [
            "Night driving",
            "Long shifts",
            "Highways",
            "Multi-stop delivery"
          ],
          "ja": [
            "夜間走行",
            "長時間シフト",
            "高速道路",
            "多地点配送"
          ]
        },
        "limitations": {
          "zh": [
            "提醒不是醫療判斷，也不能單獨代表駕駛狀態真相。",
            "資料收集需處理同意、隱私與管理邊界。"
          ],
          "en": [
            "A warning is not a medical judgment and cannot alone represent the driver's condition.",
            "Data collection needs consent, privacy, and management boundaries."
          ],
          "ja": [
            "警報は医学的判断ではなく、運転者状態の真実を単独で示すものではありません。",
            "データ収集では同意、プライバシー、管理境界が必要です。"
          ]
        },
        "doNotOverclaim": {
          "zh": [
            "避免宣稱可完全防止疲勞事故。",
            "不可把提醒資料當成唯一績效或懲處依據。"
          ],
          "en": [
            "Avoid claiming it fully prevents fatigue-related accidents.",
            "Do not use reminder data as the sole performance or disciplinary basis."
          ],
          "ja": [
            "疲労事故を完全に防ぐと表現しません。",
            "警報データを唯一の評価・処分根拠にしません。"
          ]
        },
        "planningImplications": {
          "zh": [
            "需和班表、休息、駕駛溝通與資料治理一起設計。",
            "若導入 FMS 或 AI 分析，需建立人員覆核與資料使用規則。"
          ],
          "en": [
            "Design it with scheduling, rest policy, driver communication, and data governance.",
            "If connected to FMS or AI analysis, establish human review and data-use rules."
          ],
          "ja": [
            "勤務計画、休憩制度、運転者コミュニケーション、データガバナンスと一緒に設計します。",
            "FMS や AI 分析と接続する場合、人による確認とデータ利用ルールを設けます。"
          ]
        },
        "dealerEducationMaterials": {
          "zh": [
            "疲勞提醒說明卡",
            "資料同意說明",
            "車隊管理對話稿"
          ],
          "en": [
            "Fatigue-warning explanation card",
            "Data-consent note",
            "Fleet-management conversation guide"
          ],
          "ja": [
            "疲労警報説明カード",
            "データ同意説明",
            "フリート管理対話ガイド"
          ]
        },
        "customerFAQ": [
          {
            "q": {
              "zh": "疲勞警示能判定駕駛是否違規嗎？",
              "en": "Can fatigue warning determine whether a driver violated policy?",
              "ja": "疲労警報で運転者の違反を判断できますか？"
            },
            "a": {
              "zh": "不應單獨這樣使用。它是提醒與管理輔助，仍需制度、情境與人工覆核。",
              "en": "It should not be used alone that way. It is a reminder and management aid that still needs policy, context, and human review.",
              "ja": "単独でそのように使うべきではありません。警報は管理支援であり、制度、文脈、人による確認が必要です。"
            }
          }
        ],
        "riskScores": {
          "overrelianceRisk": 66,
          "sensingBoundary": 68,
          "trainingNeed": 74,
          "dataGovernance": 86,
          "scenarioComplexity": 62
        }
      },
      {
        "id": "v2x_cooperative_alert",
        "category": "connected_safety",
        "riskLevel": "high",
        "glossaryTerms": [
          "v2x",
          "adas",
          "poc"
        ],
        "name": {
          "zh": "V2X 協同安全警示",
          "en": "V2X cooperative safety alerts",
          "ja": "V2X 協調安全警報"
        },
        "technicalFunction": {
          "zh": "透過車輛、路側或基礎設施訊號交換，提供交叉口、施工區或車隊協同警示。",
          "en": "Uses vehicle, roadside, or infrastructure signal exchange to support intersection, work-zone, or fleet-coordination alerts.",
          "ja": "車両、路側、インフラとの信号交換により、交差点、工事区間、フリート協調の警報を支援します。"
        },
        "customerValue": {
          "zh": "適合封閉場域、港區、園區或固定路線 PoC，不宜直接說成全面道路解方。",
          "en": "Suitable for closed-site, port, campus, or fixed-route PoCs, but not as a broad-road solution without validation.",
          "ja": "閉域、港湾、構内、固定ルート PoC に向きますが、検証なしに広範な道路解として扱うべきではありません。"
        },
        "driverEducationValue": {
          "zh": "教育訊號來源、延遲、覆蓋範圍與駕駛仍需觀察現場。",
          "en": "Teach signal source, latency, coverage, and that drivers still need to observe the scene.",
          "ja": "信号源、遅延、カバレッジ、運転者が現場確認を続ける必要性を教育します。"
        },
        "vehicleSegments": {
          "zh": [
            "封閉園區物流",
            "港區牽引",
            "巴士固定路線",
            "工地車隊"
          ],
          "en": [
            "Closed logistics parks",
            "Port tractors",
            "Fixed-route buses",
            "Construction fleets"
          ],
          "ja": [
            "閉域物流園区",
            "港湾牽引",
            "固定ルートバス",
            "建設フリート"
          ]
        },
        "scenarios": {
          "zh": [
            "交叉口預警",
            "施工區提醒",
            "園區車隊協同",
            "固定路線通行"
          ],
          "en": [
            "Intersection alerts",
            "Work-zone reminders",
            "Campus fleet coordination",
            "Fixed-route movement"
          ],
          "ja": [
            "交差点警報",
            "工事区間リマインダー",
            "構内フリート協調",
            "固定ルート走行"
          ]
        },
        "limitations": {
          "zh": [
            "依賴基礎設施、通訊品質、資料標準與場域管理。",
            "外部道路導入需法規與系統互通驗證。"
          ],
          "en": [
            "Depends on infrastructure, communication quality, data standards, and site management.",
            "Public-road deployment needs regulatory and interoperability validation."
          ],
          "ja": [
            "インフラ、通信品質、データ標準、サイト管理に依存します。",
            "公道導入には規制と相互運用性の検証が必要です。"
          ]
        },
        "doNotOverclaim": {
          "zh": [
            "避免說成車輛已具自動駕駛能力。",
            "不可把封閉場域 PoC 外推成全市場成熟。"
          ],
          "en": [
            "Avoid framing it as autonomous driving capability.",
            "Do not extrapolate a closed-site PoC into full-market maturity."
          ],
          "ja": [
            "自動運転能力として説明しません。",
            "閉域 PoC を全市場成熟と外挿しません。"
          ]
        },
        "planningImplications": {
          "zh": [
            "先以封閉場域與固定路線 PoC 驗證資料交換、警示邏輯與責任邊界。",
            "需與法規、資安、維運與客戶 IT 能力一起評估。"
          ],
          "en": [
            "Start with closed-site and fixed-route PoCs to validate data exchange, alert logic, and responsibility boundaries.",
            "Evaluate regulation, cybersecurity, operations, and customer IT capability together."
          ],
          "ja": [
            "閉域・固定ルート PoC でデータ交換、警報ロジック、責任境界を検証します。",
            "規制、サイバーセキュリティ、運用、顧客 IT 能力を合わせて評価します。"
          ]
        },
        "dealerEducationMaterials": {
          "zh": [
            "V2X PoC 邊界圖",
            "場域角色分工表",
            "資安與資料流程說明"
          ],
          "en": [
            "V2X PoC boundary diagram",
            "Site-role responsibility table",
            "Cybersecurity and data-flow note"
          ],
          "ja": [
            "V2X PoC 境界図",
            "サイト役割分担表",
            "サイバーセキュリティ・データフロー説明"
          ]
        },
        "customerFAQ": [
          {
            "q": {
              "zh": "V2X 是否等於車輛會自動處理所有風險？",
              "en": "Does V2X mean the vehicle automatically handles all risks?",
              "ja": "V2X は車両がすべてのリスクを自動処理するという意味ですか？"
            },
            "a": {
              "zh": "不是。它是協同資訊與警示能力，仍受通訊、場域與駕駛判斷限制。",
              "en": "No. It is cooperative information and alert capability, still limited by communication, site conditions, and driver judgment.",
              "ja": "いいえ。協調情報と警報機能であり、通信、サイト条件、運転判断に制約されます。"
            }
          }
        ],
        "riskScores": {
          "overrelianceRisk": 74,
          "sensingBoundary": 76,
          "trainingNeed": 82,
          "dataGovernance": 88,
          "scenarioComplexity": 90
        }
      },
      {
        "id": "driver_behavior_analytics",
        "category": "fleet_safety",
        "riskLevel": "high",
        "glossaryTerms": [
          "fms",
          "ai-governance",
          "adas"
        ],
        "name": {
          "zh": "駕駛行為分析與車隊安全回饋",
          "en": "Driver behavior analytics and fleet safety feedback",
          "ja": "運転行動分析とフリート安全フィードバック"
        },
        "technicalFunction": {
          "zh": "透過 FMS、車載訊號或事件資料，整理急煞、急加速、怠速、警示事件與安全訓練線索。",
          "en": "Uses FMS, vehicle signals, or event data to summarize harsh braking, acceleration, idling, alerts, and safety-training cues.",
          "ja": "FMS、車両信号、イベントデータにより、急制動、急加速、アイドリング、警報、安全教育の手がかりを整理します。"
        },
        "customerValue": {
          "zh": "可把安全從單次配備銷售延伸到車隊教育、服務與管理討論。",
          "en": "Can extend safety from one-time feature sales into fleet education, service, and management discussion.",
          "ja": "安全を単発の装備販売から、フリート教育、サービス、管理議論へ広げられます。"
        },
        "driverEducationValue": {
          "zh": "需以改善與共識為核心，避免把資料變成單向監控或懲罰。",
          "en": "Should focus on improvement and shared understanding, not one-way surveillance or punishment.",
          "ja": "改善と合意形成を中心にし、一方的な監視や罰則にしないことが重要です。"
        },
        "vehicleSegments": {
          "zh": [
            "租賃車隊",
            "物流車隊",
            "巴士",
            "冷鏈"
          ],
          "en": [
            "Leasing fleets",
            "Logistics fleets",
            "Buses",
            "Cold chain"
          ],
          "ja": [
            "リースフリート",
            "物流フリート",
            "バス",
            "冷蔵・冷凍"
          ]
        },
        "scenarios": {
          "zh": [
            "安全週報",
            "教育回饋",
            "保養預警",
            "駕駛共識會議"
          ],
          "en": [
            "Safety weekly reports",
            "Training feedback",
            "Maintenance alerts",
            "Driver alignment meetings"
          ],
          "ja": [
            "安全週報",
            "教育フィードバック",
            "整備警報",
            "運転者合意会議"
          ]
        },
        "limitations": {
          "zh": [
            "資料品質、情境脈絡、駕駛同意與 AI 解釋性會影響可用性。",
            "事件分數不應直接等同個人責任。"
          ],
          "en": [
            "Data quality, context, driver consent, and AI explainability affect usefulness.",
            "Event scores should not directly equal personal fault."
          ],
          "ja": [
            "データ品質、文脈、運転者同意、AI の説明可能性が有用性に影響します。",
            "イベントスコアを個人責任と直結させるべきではありません。"
          ]
        },
        "doNotOverclaim": {
          "zh": [
            "避免宣稱 AI 能準確判斷所有危險行為。",
            "不可在未建立資料治理前推廣成績效考核工具。"
          ],
          "en": [
            "Avoid claiming AI can accurately judge every risky behavior.",
            "Do not promote it as a performance tool before data governance is established."
          ],
          "ja": [
            "AI がすべての危険行動を正確に判断できると説明しません。",
            "データガバナンス前に評価ツールとして売り込まないようにします。"
          ]
        },
        "planningImplications": {
          "zh": [
            "需建立資料同意、事件覆核、指標定義與教育流程。",
            "應和售後服務、FMS 儀表板與車隊管理顧問服務一起設計。"
          ],
          "en": [
            "Needs data consent, event review, metric definitions, and education workflow.",
            "Should be designed with aftersales service, FMS dashboards, and fleet-management advisory work."
          ],
          "ja": [
            "データ同意、イベント確認、指標定義、教育フローが必要です。",
            "アフターサービス、FMS ダッシュボード、フリート管理助言と一緒に設計します。"
          ]
        },
        "dealerEducationMaterials": {
          "zh": [
            "資料治理說明",
            "安全回饋報告範本",
            "駕駛溝通話術"
          ],
          "en": [
            "Data-governance note",
            "Safety feedback report template",
            "Driver communication talk track"
          ],
          "ja": [
            "データガバナンス説明",
            "安全フィードバック報告テンプレート",
            "運転者コミュニケーション台本"
          ]
        },
        "customerFAQ": [
          {
            "q": {
              "zh": "這套分析可以直接拿來懲處駕駛嗎？",
              "en": "Can this analysis be used directly to discipline drivers?",
              "ja": "この分析をそのまま運転者処分に使えますか？"
            },
            "a": {
              "zh": "不建議。它應先作為教育與改善工具，並搭配資料同意、情境覆核與管理規則。",
              "en": "Not recommended. It should first be an education and improvement tool, paired with consent, context review, and management rules.",
              "ja": "推奨しません。まず教育・改善ツールとして使い、同意、文脈確認、管理ルールと組み合わせます。"
            }
          }
        ],
        "riskScores": {
          "overrelianceRisk": 72,
          "sensingBoundary": 58,
          "trainingNeed": 84,
          "dataGovernance": 96,
          "scenarioComplexity": 78
        }
      },
      {
        "id": "edge_sensing_work_zone",
        "category": "edge_sensing",
        "riskLevel": "high",
        "glossaryTerms": [
          "adas",
          "ai-governance",
          "poc"
        ],
        "name": {
          "zh": "邊緣感測與工地安全觀察",
          "en": "Edge sensing and work-zone safety observation",
          "ja": "エッジセンシングと作業エリア安全観察"
        },
        "technicalFunction": {
          "zh": "在車側或場域邊緣透過感測器或邊緣運算觀察人員、障礙物與低速移動風險。",
          "en": "Uses vehicle-side or site-edge sensing and edge computing to observe workers, obstacles, and low-speed movement risk.",
          "ja": "車側または現場エッジのセンサーとエッジ計算で、作業者、障害物、低速移動リスクを観察します。"
        },
        "customerValue": {
          "zh": "較適合作為工地、封閉場域或港區 PoC，用於定義安全邊界與教育流程。",
          "en": "Better suited for construction, closed-site, or port PoCs that define safety boundaries and education workflow.",
          "ja": "建設、閉域、港湾 PoC で安全境界と教育フローを定義する用途に向きます。"
        },
        "driverEducationValue": {
          "zh": "教育低速、停等、現場安全員與警示資訊如何分工。",
          "en": "Teach how low-speed operation, stopping, site staff, and alert information share responsibility.",
          "ja": "低速操作、停止、現場安全担当、警報情報の役割分担を教育します。"
        },
        "vehicleSegments": {
          "zh": [
            "工地車",
            "封閉園區車",
            "港區車",
            "特殊用途車"
          ],
          "en": [
            "Construction vehicles",
            "Closed-site vehicles",
            "Port vehicles",
            "Special-purpose vehicles"
          ],
          "ja": [
            "建設車両",
            "閉域車両",
            "港湾車両",
            "特殊用途車"
          ]
        },
        "scenarios": {
          "zh": [
            "工地倒車",
            "人車混行",
            "低速裝卸",
            "封閉場域測試"
          ],
          "en": [
            "Work-zone reversing",
            "Mixed people-vehicle movement",
            "Low-speed loading",
            "Closed-site testing"
          ],
          "ja": [
            "作業エリア後退",
            "人車混在",
            "低速積み下ろし",
            "閉域テスト"
          ]
        },
        "limitations": {
          "zh": [
            "需要清楚定義感測範圍、警示責任、現場 SOP 與資料保存。",
            "未經驗證不可視為通用道路功能。"
          ],
          "en": [
            "Requires clear sensing range, alert responsibility, site SOP, and data-retention rules.",
            "Without validation, it should not be treated as a general-road feature."
          ],
          "ja": [
            "検知範囲、警報責任、現場 SOP、データ保存を明確にする必要があります。",
            "検証なしに一般道路機能として扱いません。"
          ]
        },
        "doNotOverclaim": {
          "zh": [
            "不可宣稱能取代現場安全管理。",
            "不可把邊緣 AI 說成能辨識所有人員與障礙物。"
          ],
          "en": [
            "Do not claim it replaces site safety management.",
            "Do not claim edge AI can identify every worker and obstacle."
          ],
          "ja": [
            "現場安全管理を置き換えると説明しません。",
            "エッジ AI がすべての作業者と障害物を認識できると説明しません。"
          ]
        },
        "planningImplications": {
          "zh": [
            "需先做場域盤點、危害分析與 PoC 邊界定義。",
            "應設定人工覆核與現場 SOP，而不是單靠模型輸出。"
          ],
          "en": [
            "Start with site inventory, hazard analysis, and PoC boundary definition.",
            "Set human review and site SOP instead of relying only on model output."
          ],
          "ja": [
            "サイト棚卸し、危険分析、PoC 境界定義から始めます。",
            "モデル出力だけに頼らず、人による確認と現場 SOP を設定します。"
          ]
        },
        "dealerEducationMaterials": {
          "zh": [
            "場域安全邊界圖",
            "PoC 觀察表",
            "現場 SOP 對照表"
          ],
          "en": [
            "Site safety boundary map",
            "PoC observation sheet",
            "Site SOP comparison table"
          ],
          "ja": [
            "サイト安全境界図",
            "PoC 観察シート",
            "現場 SOP 対照表"
          ]
        },
        "customerFAQ": [
          {
            "q": {
              "zh": "邊緣感測是否代表工地可以減少安全員？",
              "en": "Does edge sensing mean the site can reduce safety staff?",
              "ja": "エッジセンシングで現場安全担当を減らせますか？"
            },
            "a": {
              "zh": "不應這樣承諾。它可作為觀察與提醒輔助，現場管理與人員分工仍必要。",
              "en": "That should not be promised. It can assist observation and reminders, while site management and staffing remain necessary.",
              "ja": "そのような約束はできません。観察とリマインダーを支援しますが、現場管理と人員分担は必要です。"
            }
          }
        ],
        "riskScores": {
          "overrelianceRisk": 80,
          "sensingBoundary": 88,
          "trainingNeed": 86,
          "dataGovernance": 82,
          "scenarioComplexity": 92
        }
      },
      {
        "id": "commercial_safety_education",
        "category": "education_system",
        "riskLevel": "low",
        "glossaryTerms": [
          "adas",
          "fms",
          "aeb",
          "v2x"
        ],
        "name": {
          "zh": "商用車安全教育套件",
          "en": "Commercial vehicle safety education kit",
          "ja": "商用車安全教育キット"
        },
        "technicalFunction": {
          "zh": "把 ADAS、車隊資料、交車檢核、駕駛訓練與限制說明整理成可交付的教育材料。",
          "en": "Turns ADAS, fleet data, handover checks, driver training, and limitation notes into deliverable education material.",
          "ja": "ADAS、フリートデータ、納車確認、運転者訓練、制約説明を、提供可能な教育資料に整理します。"
        },
        "customerValue": {
          "zh": "讓安全功能從規格文字變成客戶可理解、可訓練、可覆核的使用流程。",
          "en": "Moves safety features from specification text into customer-understandable, trainable, and reviewable usage workflows.",
          "ja": "安全機能を仕様表から、顧客が理解・訓練・確認できる利用フローへ移します。"
        },
        "driverEducationValue": {
          "zh": "建立「系統輔助、駕駛負責、情境限制、資料需覆核」的共同語言。",
          "en": "Creates shared language: system assistance, driver responsibility, contextual limits, and data requiring review.",
          "ja": "「システム支援、運転者責任、場面制約、データ確認」という共通言語を作ります。"
        },
        "vehicleSegments": {
          "zh": [
            "所有商用車隊",
            "租賃車隊",
            "新車交付",
            "PoC 客戶"
          ],
          "en": [
            "All commercial fleets",
            "Leasing fleets",
            "New-vehicle delivery",
            "PoC customers"
          ],
          "ja": [
            "すべての商用フリート",
            "リースフリート",
            "新車納車",
            "PoC 顧客"
          ]
        },
        "scenarios": {
          "zh": [
            "交車教育",
            "通路訓練",
            "客戶安全會議",
            "PoC 啟動"
          ],
          "en": [
            "Vehicle handover",
            "Dealer training",
            "Customer safety meetings",
            "PoC kickoff"
          ],
          "ja": [
            "納車教育",
            "販売店研修",
            "顧客安全会議",
            "PoC キックオフ"
          ]
        },
        "limitations": {
          "zh": [
            "教育材料需隨實際車型、規格、法規與客戶場景更新。",
            "不能用通用文字取代正式車主手冊或法規文件。"
          ],
          "en": [
            "Education material must be updated for actual vehicle models, specifications, regulations, and customer scenarios.",
            "Generic copy cannot replace official owner manuals or regulatory documents."
          ],
          "ja": [
            "教育資料は実車型、仕様、規制、顧客場面に合わせて更新が必要です。",
            "一般的な文面は正式な取扱説明書や法規文書を置き換えません。"
          ]
        },
        "doNotOverclaim": {
          "zh": [
            "避免把教育套件說成安全保證。",
            "不可暗示所有功能在所有車型上都可用。"
          ],
          "en": [
            "Avoid framing an education kit as a safety guarantee.",
            "Do not imply every function is available on every vehicle model."
          ],
          "ja": [
            "教育キットを安全保証として説明しません。",
            "すべての機能がすべての車型で使えると示唆しません。"
          ]
        },
        "planningImplications": {
          "zh": [
            "適合作為通路教育、客戶訪談與 PoC 啟動的共用底稿。",
            "需和車型規格、實車手冊、售後流程與客戶場域一起校正。"
          ],
          "en": [
            "Useful as a shared base for dealer education, customer interviews, and PoC kickoff.",
            "Must be calibrated with model specifications, official manuals, aftersales workflow, and customer sites."
          ],
          "ja": [
            "販売店教育、顧客ヒアリング、PoC 開始の共通土台として使えます。",
            "車型仕様、正式マニュアル、アフターサービス、顧客サイトに合わせて校正します。"
          ]
        },
        "dealerEducationMaterials": {
          "zh": [
            "功能限制矩陣",
            "交車教育腳本",
            "客戶 FAQ 範本",
            "PoC 風險清單"
          ],
          "en": [
            "Feature-limit matrix",
            "Handover education script",
            "Customer FAQ template",
            "PoC risk checklist"
          ],
          "ja": [
            "機能制約マトリクス",
            "納車教育スクリプト",
            "顧客 FAQ テンプレート",
            "PoC リスクチェックリスト"
          ]
        },
        "customerFAQ": [
          {
            "q": {
              "zh": "這份教育套件是否能取代車主手冊？",
              "en": "Can this education kit replace the owner manual?",
              "ja": "この教育キットは取扱説明書の代わりになりますか？"
            },
            "a": {
              "zh": "不能。它是產品規劃與教育溝通輔助，正式操作仍以實車手冊與法規為準。",
              "en": "No. It supports product-planning and education communication; formal operation still follows official manuals and regulation.",
              "ja": "いいえ。商品企画と教育コミュニケーションを支援するもので、正式な操作は取扱説明書と規制に従います。"
            }
          }
        ],
        "riskScores": {
          "overrelianceRisk": 46,
          "sensingBoundary": 40,
          "trainingNeed": 68,
          "dataGovernance": 48,
          "scenarioComplexity": 54
        }
      }
    ]
  },
  "data/scenario_simulator.json": {
    "meta": {
      "schemaVersion": "1.0.0",
      "dataStatus": "demo_dataset",
      "moduleId": "scenario-simulator",
      "sourceBasis": "Portfolio proposal strategy narrative converted into a static rule-based prototype simulation.",
      "publicBoundary": {
        "zh": "本模擬器僅為作品集展示，不是官方採購、工程、法務或產品上市建議工具。",
        "en": "This simulator is a portfolio prototype only. It is not an official procurement, engineering, legal, or product-launch recommendation tool.",
        "ja": "このシミュレーターはポートフォリオ用のプロトタイプです。公式な調達、技術、法務、製品導入の推奨ツールではありません。"
      }
    },
    "scenarioPresets": [
      {
        "scenario_id": "urban_delivery",
        "name": {
          "zh": "市區配送",
          "en": "Urban delivery",
          "ja": "都市配送"
        },
        "inputs": {
          "route_type": "urban_fixed",
          "annual_mileage": "medium",
          "payload_level": "light",
          "depot_charging": "available",
          "downtime_sensitivity": "high",
          "esg_pressure": "medium",
          "regulation_exposure": "medium",
          "infrastructure_readiness": "medium"
        }
      },
      {
        "scenario_id": "cold_chain",
        "name": {
          "zh": "冷鏈物流",
          "en": "Cold-chain logistics",
          "ja": "コールドチェーン物流"
        },
        "inputs": {
          "route_type": "regional_mixed",
          "annual_mileage": "high",
          "payload_level": "medium",
          "depot_charging": "partial",
          "downtime_sensitivity": "critical",
          "esg_pressure": "high",
          "regulation_exposure": "medium",
          "infrastructure_readiness": "medium"
        }
      },
      {
        "scenario_id": "construction",
        "name": {
          "zh": "營建工程",
          "en": "Construction",
          "ja": "建設現場"
        },
        "inputs": {
          "route_type": "site_variable",
          "annual_mileage": "low",
          "payload_level": "heavy",
          "depot_charging": "limited",
          "downtime_sensitivity": "high",
          "esg_pressure": "low",
          "regulation_exposure": "medium",
          "infrastructure_readiness": "low"
        }
      },
      {
        "scenario_id": "bus_operation",
        "name": {
          "zh": "巴士營運",
          "en": "Bus operation",
          "ja": "バス運行"
        },
        "inputs": {
          "route_type": "urban_fixed",
          "annual_mileage": "high",
          "payload_level": "passenger",
          "depot_charging": "available",
          "downtime_sensitivity": "critical",
          "esg_pressure": "high",
          "regulation_exposure": "high",
          "infrastructure_readiness": "high"
        }
      },
      {
        "scenario_id": "long_haul",
        "name": {
          "zh": "長途幹線貨運",
          "en": "Long-haul freight",
          "ja": "長距離幹線輸送"
        },
        "inputs": {
          "route_type": "long_haul",
          "annual_mileage": "very_high",
          "payload_level": "heavy",
          "depot_charging": "limited",
          "downtime_sensitivity": "high",
          "esg_pressure": "medium",
          "regulation_exposure": "medium",
          "infrastructure_readiness": "low"
        }
      },
      {
        "scenario_id": "fleet_leasing",
        "name": {
          "zh": "車隊租賃",
          "en": "Fleet leasing",
          "ja": "車隊リース"
        },
        "inputs": {
          "route_type": "mixed_portfolio",
          "annual_mileage": "medium",
          "payload_level": "mixed",
          "depot_charging": "partial",
          "downtime_sensitivity": "medium",
          "esg_pressure": "medium",
          "regulation_exposure": "medium",
          "infrastructure_readiness": "medium"
        }
      },
      {
        "scenario_id": "closed_logistics_park",
        "name": {
          "zh": "封閉物流園區",
          "en": "Closed logistics park",
          "ja": "閉鎖物流パーク"
        },
        "inputs": {
          "route_type": "closed_site",
          "annual_mileage": "medium",
          "payload_level": "medium",
          "depot_charging": "available",
          "downtime_sensitivity": "medium",
          "esg_pressure": "high",
          "regulation_exposure": "low",
          "infrastructure_readiness": "high"
        }
      }
    ],
    "optionLabels": {
      "route_type": [
        "urban_fixed",
        "regional_mixed",
        "site_variable",
        "long_haul",
        "mixed_portfolio",
        "closed_site"
      ],
      "annual_mileage": [
        "low",
        "medium",
        "high",
        "very_high"
      ],
      "payload_level": [
        "light",
        "medium",
        "heavy",
        "passenger",
        "mixed"
      ],
      "depot_charging": [
        "available",
        "partial",
        "limited"
      ],
      "downtime_sensitivity": [
        "medium",
        "high",
        "critical"
      ],
      "esg_pressure": [
        "low",
        "medium",
        "high"
      ],
      "regulation_exposure": [
        "low",
        "medium",
        "high"
      ],
      "infrastructure_readiness": [
        "low",
        "medium",
        "high"
      ]
    },
    "rules": [
      {
        "rule_id": "bev_route_fit",
        "conditions": {
          "route_type": [
            "urban_fixed",
            "closed_site"
          ],
          "depot_charging": [
            "available"
          ],
          "infrastructure_readiness": [
            "medium",
            "high"
          ]
        },
        "layers": {
          "near": [
            "bev_basics",
            "tco_route_fit",
            "charging_safety"
          ],
          "medium": [
            "bev_route_poc"
          ],
          "long": [
            "battery_soh_tracking"
          ],
          "deferred": []
        }
      },
      {
        "rule_id": "bev_partial_charging",
        "conditions": {
          "depot_charging": [
            "partial"
          ],
          "infrastructure_readiness": [
            "medium"
          ]
        },
        "layers": {
          "near": [
            "charging_site_check",
            "tco_route_fit"
          ],
          "medium": [
            "charging_poc",
            "fms_energy_monitoring"
          ],
          "long": [
            "bev_route_poc"
          ],
          "deferred": []
        }
      },
      {
        "rule_id": "limited_infrastructure",
        "conditions": {
          "infrastructure_readiness": [
            "low"
          ]
        },
        "layers": {
          "near": [
            "infrastructure_discovery",
            "adas_safety_limit"
          ],
          "medium": [
            "fms_baseline_poc"
          ],
          "long": [
            "fcev_tracking",
            "charging_partnerships"
          ],
          "deferred": [
            "v2g_energy_service",
            "level4_automation"
          ]
        }
      },
      {
        "rule_id": "high_downtime",
        "conditions": {
          "downtime_sensitivity": [
            "high",
            "critical"
          ]
        },
        "layers": {
          "near": [
            "uptime_service_education",
            "fms_kpi"
          ],
          "medium": [
            "predictive_maintenance_poc"
          ],
          "long": [
            "ai_fleet_assist"
          ],
          "deferred": []
        }
      },
      {
        "rule_id": "high_esg",
        "conditions": {
          "esg_pressure": [
            "high"
          ]
        },
        "layers": {
          "near": [
            "esg_data_boundary",
            "carbon_tracking_basics"
          ],
          "medium": [
            "carbon_tracking_poc"
          ],
          "long": [
            "v2g_energy_service"
          ],
          "deferred": []
        }
      },
      {
        "rule_id": "heavy_or_longhaul",
        "conditions": {
          "route_type": [
            "long_haul"
          ],
          "payload_level": [
            "heavy"
          ]
        },
        "layers": {
          "near": [
            "tco_payload_limits",
            "adas_safety_limit"
          ],
          "medium": [
            "fms_baseline_poc"
          ],
          "long": [
            "fcev_tracking",
            "hybrid_transition_review"
          ],
          "deferred": [
            "v2g_energy_service"
          ]
        }
      },
      {
        "rule_id": "closed_site_automation",
        "conditions": {
          "route_type": [
            "closed_site"
          ],
          "regulation_exposure": [
            "low"
          ],
          "infrastructure_readiness": [
            "high"
          ]
        },
        "layers": {
          "near": [
            "odd_education",
            "safety_boundary_workshop"
          ],
          "medium": [
            "closed_site_automation_poc"
          ],
          "long": [
            "level4_automation"
          ],
          "deferred": []
        }
      },
      {
        "rule_id": "bus_operation",
        "conditions": {
          "payload_level": [
            "passenger"
          ],
          "depot_charging": [
            "available"
          ]
        },
        "layers": {
          "near": [
            "bev_basics",
            "adas_safety_limit",
            "charging_safety"
          ],
          "medium": [
            "bev_route_poc",
            "fms_energy_monitoring"
          ],
          "long": [
            "v2g_energy_service"
          ],
          "deferred": []
        }
      },
      {
        "rule_id": "mixed_leasing",
        "conditions": {
          "route_type": [
            "mixed_portfolio"
          ]
        },
        "layers": {
          "near": [
            "portfolio_segmentation",
            "tco_route_fit",
            "fms_kpi"
          ],
          "medium": [
            "fms_baseline_poc",
            "carbon_tracking_poc"
          ],
          "long": [
            "bev_route_poc",
            "fcev_tracking"
          ],
          "deferred": [
            "level4_automation"
          ]
        }
      }
    ],
    "recommendationItems": {
      "bev_basics": {
        "glossaryTerms": [
          "bev",
          "tco"
        ],
        "text": {
          "zh": "說明 BEV 的續航、載重、回場充電與 TCO 條件。",
          "en": "Explain BEV range, payload, depot charging, and TCO conditions.",
          "ja": "BEV の航続、積載、拠点充電、TCO 条件を説明します。"
        }
      },
      "tco_route_fit": {
        "glossaryTerms": [
          "tco"
        ],
        "text": {
          "zh": "用路線與年度里程拆解 TCO，而不是只比較購車價格。",
          "en": "Use route and annual mileage to discuss TCO instead of comparing purchase price only.",
          "ja": "購入価格だけでなく、ルートと年間走行距離から TCO を整理します。"
        }
      },
      "tco_payload_limits": {
        "glossaryTerms": [
          "tco"
        ],
        "text": {
          "zh": "把重載、長途、回場時間與能源補給限制納入 TCO 討論。",
          "en": "Include payload, long-haul distance, depot return timing, and energy-refill limits in TCO discussion.",
          "ja": "高積載、長距離、拠点帰着時間、エネルギー補給制約を TCO 議論に含めます。"
        }
      },
      "charging_safety": {
        "glossaryTerms": [
          "bev"
        ],
        "text": {
          "zh": "建立充電安全、停車動線與場站電力盤點教育。",
          "en": "Build education for charging safety, parking flow, and depot power checks.",
          "ja": "充電安全、駐車動線、拠点電力確認の教育を整えます。"
        }
      },
      "charging_site_check": {
        "glossaryTerms": [
          "bev"
        ],
        "text": {
          "zh": "先做場站電力、停車與充電時段檢核。",
          "en": "Start with site checks for power capacity, parking, and charging windows.",
          "ja": "電力容量、駐車、充電時間帯の拠点確認から始めます。"
        }
      },
      "infrastructure_discovery": {
        "glossaryTerms": [
          "bev",
          "fcev"
        ],
        "text": {
          "zh": "把能源補給條件列為前期訪談核心，不急著推定動力方案。",
          "en": "Make energy access a core discovery topic before narrowing the powertrain path.",
          "ja": "動力案を急いで決めず、エネルギー補給条件を初期ヒアリングの中心にします。"
        }
      },
      "adas_safety_limit": {
        "glossaryTerms": [
          "adas",
          "odd"
        ],
        "text": {
          "zh": "說明 ADAS 是輔助功能，需清楚界定駕駛責任與適用條件。",
          "en": "Explain ADAS as assistance, with clear driver responsibility and operating conditions.",
          "ja": "ADAS は支援機能であり、運転者責任と利用条件を明確に説明します。"
        }
      },
      "uptime_service_education": {
        "glossaryTerms": [
          "fms",
          "kpi"
        ],
        "text": {
          "zh": "把停工敏感度轉成稼動率 KPI、保養提醒與服務回應教育。",
          "en": "Translate downtime sensitivity into uptime KPIs, maintenance alerts, and service response education.",
          "ja": "停止リスクを稼働率 KPI、整備通知、サービス対応教育へつなげます。"
        }
      },
      "fms_kpi": {
        "glossaryTerms": [
          "fms",
          "kpi"
        ],
        "text": {
          "zh": "先定義 FMS 儀表板的最小可用 KPI。",
          "en": "Define the minimum useful KPIs for an FMS dashboard.",
          "ja": "FMS ダッシュボードに必要な最小 KPI を定義します。"
        }
      },
      "esg_data_boundary": {
        "glossaryTerms": [
          "esg",
          "carbon-accounting"
        ],
        "text": {
          "zh": "區分 ESG 訊號、排放估算與已驗證資料。",
          "en": "Separate ESG signals, emissions estimates, and verified data.",
          "ja": "ESG シグナル、排出量推計、検証済みデータを分けます。"
        }
      },
      "carbon_tracking_basics": {
        "glossaryTerms": [
          "carbon-accounting",
          "esg"
        ],
        "text": {
          "zh": "教育排放邊界、活動資料與係數假設，避免把 demo 數字當正式盤查。",
          "en": "Educate on emissions boundaries, activity data, and factor assumptions so demo numbers are not treated as formal reporting.",
          "ja": "排出境界、活動データ、係数仮定を説明し、デモ値を正式報告として扱わないようにします。"
        }
      },
      "odd_education": {
        "glossaryTerms": [
          "odd",
          "l4"
        ],
        "text": {
          "zh": "先用 ODD 定義封閉場域、速度、路線與人工接管邊界。",
          "en": "Use ODD to define closed-site scope, speed, routes, and human takeover boundaries.",
          "ja": "ODD で閉鎖エリア、速度、ルート、人の介入境界を定義します。"
        }
      },
      "safety_boundary_workshop": {
        "glossaryTerms": [
          "l4",
          "poc"
        ],
        "text": {
          "zh": "把安全邊界工作坊列為自動化 PoC 前置條件。",
          "en": "Make a safety-boundary workshop a prerequisite for automation PoC planning.",
          "ja": "自動化 PoC の前提として安全境界ワークショップを置きます。"
        }
      },
      "portfolio_segmentation": {
        "glossaryTerms": [
          "tco",
          "fms"
        ],
        "text": {
          "zh": "先把租賃車隊依路線、里程、載重與能源條件分群。",
          "en": "Segment leasing fleets by route, mileage, payload, and energy conditions first.",
          "ja": "リース車隊をルート、走行距離、積載、エネルギー条件で先に分けます。"
        }
      },
      "bev_route_poc": {
        "glossaryTerms": [
          "bev",
          "poc",
          "tco",
          "soh"
        ],
        "text": {
          "zh": "設計 BEV 路線 PoC，驗證 TCO、充電排程、SOH 與服務流程。",
          "en": "Design a BEV route PoC to validate TCO, charging schedule, SOH, and service workflow.",
          "ja": "BEV ルート PoC で TCO、充電スケジュール、SOH、サービス業務を検証します。"
        }
      },
      "charging_poc": {
        "glossaryTerms": [
          "bev",
          "poc"
        ],
        "text": {
          "zh": "用小型場站 PoC 驗證停車、尖離峰充電與維修安全流程。",
          "en": "Use a small-site PoC to test parking, peak/off-peak charging, and service-safety workflow.",
          "ja": "小規模拠点 PoC で駐車、ピーク・オフピーク充電、整備安全を検証します。"
        }
      },
      "fms_energy_monitoring": {
        "glossaryTerms": [
          "fms",
          "bev"
        ],
        "text": {
          "zh": "把 FMS 與能源監控連結，觀察電耗、停車與維修訊號。",
          "en": "Connect FMS and energy monitoring to observe energy use, parking, and maintenance signals.",
          "ja": "FMS とエネルギー監視をつなぎ、電費、駐車、整備シグナルを見ます。"
        }
      },
      "fms_baseline_poc": {
        "glossaryTerms": [
          "fms",
          "kpi",
          "poc"
        ],
        "text": {
          "zh": "先做 FMS 基準 PoC，建立里程、稼動率、保養與停工資料。",
          "en": "Start with an FMS baseline PoC for mileage, uptime, maintenance, and downtime data.",
          "ja": "FMS 基準 PoC で走行距離、稼働率、整備、停止時間データを作ります。"
        }
      },
      "predictive_maintenance_poc": {
        "glossaryTerms": [
          "fms",
          "ai-governance",
          "poc"
        ],
        "text": {
          "zh": "以人工覆核的預知保養 PoC 驗證異常訊號，不把 AI 輸出視為保證結果。",
          "en": "Use a human-reviewed predictive maintenance PoC to validate anomaly signals without treating AI output as guaranteed results.",
          "ja": "人が確認する予知保全 PoC で異常シグナルを検証し、AI 出力を保証結果として扱いません。"
        }
      },
      "carbon_tracking_poc": {
        "glossaryTerms": [
          "carbon-accounting",
          "esg",
          "poc"
        ],
        "text": {
          "zh": "建立碳追蹤 PoC，先確認資料邊界、係數、里程與能源資料品質。",
          "en": "Build a carbon-tracking PoC to verify boundaries, factors, mileage, and energy-data quality.",
          "ja": "炭素追跡 PoC で境界、係数、走行距離、エネルギーデータ品質を確認します。"
        }
      },
      "closed_site_automation_poc": {
        "glossaryTerms": [
          "l4",
          "odd",
          "poc"
        ],
        "text": {
          "zh": "以封閉場域流程驗證自動化 PoC，不延伸為一般道路部署承諾。",
          "en": "Validate automation PoC within closed-site processes without extending it into general-road deployment promises.",
          "ja": "閉鎖エリアの流れで自動化 PoC を検証し、一般道路展開の約束に広げません。"
        }
      },
      "battery_soh_tracking": {
        "glossaryTerms": [
          "soh",
          "bev"
        ],
        "text": {
          "zh": "長期追蹤 SOH、保固、殘值與季節性能源表現。",
          "en": "Track SOH, warranty, residual value, and seasonal energy performance over time.",
          "ja": "SOH、保証、残価、季節別エネルギー性能を長期で追跡します。"
        }
      },
      "fcev_tracking": {
        "glossaryTerms": [
          "fcev",
          "tco"
        ],
        "text": {
          "zh": "追蹤 FCEV、氫能場站與長途高載重案例，不提前承諾近期導入。",
          "en": "Track FCEVs, hydrogen sites, and long-haul high-payload cases without promising near-term rollout.",
          "ja": "FCEV、水素拠点、長距離高積載事例を追跡し、短期導入を約束しません。"
        }
      },
      "hybrid_transition_review": {
        "glossaryTerms": [
          "tco"
        ],
        "text": {
          "zh": "視能源補給與載重條件評估過渡方案，不將其視為所有車隊的標準答案。",
          "en": "Review transition options by energy access and payload, without treating one path as the standard answer for every fleet.",
          "ja": "エネルギー補給と積載条件で移行案を見直し、一つの道を全車隊の標準解としません。"
        }
      },
      "ai_fleet_assist": {
        "glossaryTerms": [
          "ai-governance",
          "fms"
        ],
        "text": {
          "zh": "長期觀測 AI 車隊輔助，前提是資料品質、人審與責任邊界清楚。",
          "en": "Track AI fleet assistance long term, assuming data quality, human review, and accountability are clear.",
          "ja": "データ品質、人による確認、責任範囲を前提に、AI 車隊支援を長期観測します。"
        }
      },
      "v2g_energy_service": {
        "glossaryTerms": [
          "v2g",
          "bev",
          "soh"
        ],
        "text": {
          "zh": "把 V2G 放在長期或延後觀測，等待電網規則、雙向充電、保固與收益模型成熟。",
          "en": "Keep V2G in long-term or deferred observation until grid rules, bidirectional charging, warranty, and revenue models mature.",
          "ja": "系統ルール、双方向充電、保証、収益モデルが成熟するまで V2G は長期または保留観測に置きます。"
        }
      },
      "level4_automation": {
        "glossaryTerms": [
          "l4",
          "odd"
        ],
        "text": {
          "zh": "Level 4 物流自動化需保留在受控場域與長期觀測，不可包裝成通用道路解法。",
          "en": "Level 4 logistics automation should stay in controlled sites and long-term observation, not be framed as a general-road solution.",
          "ja": "Level 4 物流自動化は制御された場域と長期観測に置き、一般道路の解決策として表現しません。"
        }
      },
      "charging_partnerships": {
        "glossaryTerms": [
          "bev"
        ],
        "text": {
          "zh": "追蹤充電合作場站與能源服務夥伴，不把外部資源視為已到位。",
          "en": "Track charging partner sites and energy-service partners without assuming external resources are already available.",
          "ja": "充電提携拠点とエネルギーサービスパートナーを追跡し、外部資源が既にあると見なしません。"
        }
      }
    },
    "defaultLayers": {
      "near": [
        "adas_safety_limit",
        "tco_route_fit"
      ],
      "medium": [
        "fms_baseline_poc"
      ],
      "long": [
        "fcev_tracking"
      ],
      "deferred": [
        "level4_automation",
        "v2g_energy_service"
      ]
    },
    "narratives": {
      "reasoning": {
        "zh": "此原型依路線、里程、載重、能源補給、停工敏感度、ESG 壓力、法規暴露與基礎建設成熟度，組合出企劃討論順序。輸出代表下一步訪談與驗證重點，不代表採購或上市建議。",
        "en": "This prototype combines route, mileage, payload, energy access, downtime sensitivity, ESG pressure, regulation exposure, and infrastructure readiness into a planning discussion order. Outputs indicate interview and validation priorities, not procurement or launch recommendations.",
        "ja": "このプロトタイプは、ルート、走行距離、積載、エネルギー補給、停止感度、ESG 圧力、規制露出、インフラ成熟度から企画議論の順序を組み立てます。出力はヒアリングと検証の優先点であり、調達や導入の推奨ではありません。"
      },
      "dealerEducation": {
        "zh": "通路教育應先聚焦客戶任務、系統限制、資料授權、服務回應與 TCO 溝通，避免把示範分數說成保證成效。",
        "en": "Dealer education should focus first on customer mission, system limits, data consent, service response, and TCO communication, avoiding any claim that demo scores guarantee outcomes.",
        "ja": "販売店教育では、顧客ミッション、システム限界、データ同意、サービス対応、TCO コミュニケーションを先に扱い、デモスコアを成果保証として語らないことが重要です。"
      },
      "interviewQuestions": {
        "zh": [
          "車輛每天是否回到固定場站？",
          "停工一小時對營運成本的影響有多大？",
          "路線、載重與溫控或乘客需求是否穩定？",
          "客戶能否提供里程、油耗、維修與能源資料？",
          "ESG 或法規壓力是已確定要求，還是未來觀測訊號？"
        ],
        "en": [
          "Do vehicles return to a fixed depot every day?",
          "How costly is one hour of downtime for the operation?",
          "Are route, payload, temperature-control, or passenger needs stable?",
          "Can the customer provide mileage, fuel, maintenance, and energy data?",
          "Are ESG or regulatory pressures confirmed requirements or signals to monitor?"
        ],
        "ja": [
          "車両は毎日固定拠点へ戻りますか？",
          "停止 1 時間は運用コストにどれほど影響しますか？",
          "ルート、積載、温度管理、乗客ニーズは安定していますか？",
          "顧客は走行距離、燃料、整備、エネルギーデータを提供できますか？",
          "ESG や規制圧力は確定要件ですか、それとも観測すべきシグナルですか？"
        ]
      },
      "dataGaps": {
        "zh": [
          "實際路線與停車時間",
          "年度里程與尖離峰使用",
          "載重、冷鏈或乘客需求波動",
          "場站電力與能源補給證據",
          "維修、故障與停工歷史資料"
        ],
        "en": [
          "Actual routes and parking time",
          "Annual mileage and peak/off-peak usage",
          "Payload, cold-chain, or passenger-demand variation",
          "Depot power and energy-access evidence",
          "Maintenance, fault, and downtime history"
        ],
        "ja": [
          "実際のルートと駐車時間",
          "年間走行距離とピーク・オフピーク利用",
          "積載、冷鏈、乗客需要の変動",
          "拠点電力とエネルギー補給の根拠",
          "整備、故障、停止履歴"
        ]
      },
      "humanReview": {
        "zh": "人工審查需確認資料來源、法規時效、車型供應、通路能力與品牌安全。不得將原型輸出直接作為官方企劃、採購或法務結論。",
        "en": "Human review must verify sources, regulatory currency, vehicle availability, channel capability, and brand safety. Prototype outputs must not be used directly as official planning, procurement, or legal conclusions.",
        "ja": "人による確認では、出典、規制の最新性、車両供給、チャネル能力、ブランド安全性を検証する必要があります。プロトタイプ出力を公式な企画、調達、法務結論として直接使ってはいけません。"
      }
    }
  },
  "data/source_registry.json": {
    "registryType": "demo-source-registry",
    "lastUpdated": "2026-06-02",
    "publicRule": "All generated site data is demo data unless a source entry explicitly supports a public claim.",
    "sources": [
      {
        "source_id": "project_proposal_docx",
        "source_name": "Portfolio_05_Future_Mobility_Strategy_Lab.docx",
        "source_type": "user_provided_project_proposal",
        "confidence_tier": "portfolio_planning_source",
        "last_updated": "2026-06-02",
        "supported_claims": [
          "project positioning",
          "site information architecture",
          "demo scoring model structure",
          "module intent"
        ],
        "limitations": [
          "not a live market source",
          "not official company data",
          "requires human review before public claims"
        ],
        "allowed_outputs": [
          "portfolio narrative",
          "demo data structure",
          "strategy framework labels"
        ],
        "restricted_outputs": [
          "official market forecast",
          "official product launch plan",
          "verified regulatory claim"
        ]
      },
      {
        "source_id": "demo_dataset_placeholder",
        "source_name": "Generated demo datasets",
        "source_type": "demo_data",
        "confidence_tier": "demo_requires_validation",
        "last_updated": "2026-06-02",
        "supported_claims": [
          "interface behavior demonstration",
          "methodology demonstration"
        ],
        "limitations": [
          "scores are illustrative",
          "not suitable for business decisions without validation"
        ],
        "allowed_outputs": [
          "demo labels",
          "sample cards",
          "prototype charts"
        ],
        "restricted_outputs": [
          "fact claim",
          "customer recommendation",
          "regulatory conclusion"
        ]
      }
    ]
  },
  "data/strategy_roadmap.json": {
    "meta": {
      "schemaVersion": "1.0.0",
      "moduleId": "strategy-roadmap-studio",
      "dataStatus": "demo_assumptions",
      "sourceBasis": "Portfolio proposal strategy narrative converted into a static 2026-2035 roadmap prototype.",
      "publicBoundary": {
        "zh": "本策略路線圖僅為作品集 demo 假設，用於展示商品企劃推理框架；不是官方產品上市、採購、工程、法規、財務或永續揭露建議。",
        "en": "This strategy roadmap uses portfolio demo assumptions only. It demonstrates product-planning reasoning and is not an official launch, procurement, engineering, legal, financial, or sustainability-disclosure recommendation.",
        "ja": "この戦略ロードマップはポートフォリオ用の demo 仮定です。商品企画の考え方を示すものであり、公式な発売、調達、技術、法務、財務、サステナビリティ開示の提案ではありません。"
      },
      "title": {
        "zh": "策略路線圖工作室",
        "en": "Strategy Roadmap Studio",
        "ja": "戦略ロードマップスタジオ"
      },
      "subtitle": {
        "zh": "把趨勢、成熟度、情境、能源、安全、車聯網與 ESG 訊號整理成 2026 至 2035 的商品企劃節奏。",
        "en": "Turns trend, maturity, scenario, energy, safety, connected-fleet, and ESG signals into a 2026-2035 product-planning cadence.",
        "ja": "トレンド、成熟度、シナリオ、エネルギー、安全、コネクテッドフリート、ESG の信号を 2026-2035 年の商品企画リズムに整理します。"
      }
    },
    "labels": {
      "demo": {
        "zh": "Demo assumptions",
        "en": "Demo assumptions",
        "ja": "Demo assumptions"
      },
      "humanReview": {
        "zh": "需人工審查",
        "en": "Human review required",
        "ja": "人による確認が必要"
      },
      "notLaunchPlan": {
        "zh": "不是產品上市時程",
        "en": "Not a launch schedule",
        "ja": "発売スケジュールではありません"
      },
      "filterAll": {
        "zh": "全部",
        "en": "All",
        "ja": "すべて"
      },
      "selectedItem": {
        "zh": "選取項目",
        "en": "Selected item",
        "ja": "選択項目"
      },
      "recommendedActions": {
        "zh": "建議行動",
        "en": "Recommended actions",
        "ja": "推奨アクション"
      },
      "requiredData": {
        "zh": "所需資料",
        "en": "Required data",
        "ja": "必要データ"
      },
      "dealerEducation": {
        "zh": "通路教育",
        "en": "Dealer education",
        "ja": "販売チャネル教育"
      },
      "pocSuggestion": {
        "zh": "客戶 PoC 建議",
        "en": "Customer PoC suggestion",
        "ja": "顧客 PoC 提案"
      },
      "successMetrics": {
        "zh": "成功指標",
        "en": "Success metrics",
        "ja": "成功指標"
      },
      "risks": {
        "zh": "風險",
        "en": "Risks",
        "ja": "リスク"
      },
      "validationNeeds": {
        "zh": "驗證需求",
        "en": "Validation needs",
        "ja": "検証事項"
      },
      "timelineSummaryTitle": {
        "zh": "可及性摘要",
        "en": "Accessibility summary",
        "ja": "アクセシビリティ要約"
      },
      "demoStart": {
        "zh": "開始導覽",
        "en": "Start demo",
        "ja": "デモ開始"
      },
      "filterLabel": {
        "zh": "篩選策略主題",
        "en": "Filter strategy themes",
        "ja": "戦略テーマを絞り込む"
      }
    },
    "themes": [
      {
        "id": "education",
        "name": {
          "zh": "教育與資料基礎",
          "en": "Education and data foundation",
          "ja": "教育とデータ基盤"
        }
      },
      {
        "id": "energy",
        "name": {
          "zh": "能源與 TCO",
          "en": "Energy and TCO",
          "ja": "エネルギーと TCO"
        }
      },
      {
        "id": "safety",
        "name": {
          "zh": "安全與 ADAS",
          "en": "Safety and ADAS",
          "ja": "安全と ADAS"
        }
      },
      {
        "id": "connected_fleet",
        "name": {
          "zh": "車聯網與服務",
          "en": "Connected fleet and service",
          "ja": "コネクテッドフリートとサービス"
        }
      },
      {
        "id": "esg",
        "name": {
          "zh": "ESG 與政策",
          "en": "ESG and policy",
          "ja": "ESG と政策"
        }
      },
      {
        "id": "scenario",
        "name": {
          "zh": "情境與客戶 PoC",
          "en": "Scenario and customer PoC",
          "ja": "シナリオと顧客 PoC"
        }
      }
    ],
    "periods": [
      {
        "id": "2026_2027",
        "start": 2026,
        "end": 2027,
        "label": {
          "zh": "2026-2027 近期教育與資料基礎",
          "en": "2026-2027 Near-term education and data foundation",
          "ja": "2026-2027 短期教育とデータ基盤"
        }
      },
      {
        "id": "2028_2030",
        "start": 2028,
        "end": 2030,
        "label": {
          "zh": "2028-2030 PoC 擴充與固定路線電動化",
          "en": "2028-2030 PoC expansion and fixed-route electrification",
          "ja": "2028-2030 PoC 拡張と固定ルート電動化"
        }
      },
      {
        "id": "2031_2033",
        "start": 2031,
        "end": 2033,
        "label": {
          "zh": "2031-2033 車聯網與預測維修成熟",
          "en": "2031-2033 Connected-fleet and predictive-maintenance maturity",
          "ja": "2031-2033 コネクテッドフリートと予知保全の成熟"
        }
      },
      {
        "id": "2034_2035",
        "start": 2034,
        "end": 2035,
        "label": {
          "zh": "2034-2035 長期追蹤與邊界驗證",
          "en": "2034-2035 Long-term tracking and boundary validation",
          "ja": "2034-2035 長期追跡と境界検証"
        }
      }
    ],
    "roadmapItems": [
      {
        "id": "data_foundation",
        "periodId": "2026_2027",
        "startYear": 2026,
        "endYear": 2027,
        "theme": "education",
        "strategyTheme": {
          "zh": "建立企劃資料字典",
          "en": "Build the planning data dictionary",
          "ja": "企画データ辞書を整える"
        },
        "targetSegments": {
          "zh": [
            "都市配送",
            "冷鏈物流",
            "車隊租賃"
          ],
          "en": [
            "Urban delivery",
            "Cold-chain logistics",
            "Fleet leasing"
          ],
          "ja": [
            "都市配送",
            "コールドチェーン",
            "フリートリース"
          ]
        },
        "customerScenarios": {
          "zh": [
            "固定路線訪談",
            "停車時間盤點",
            "維修回廠資料整理"
          ],
          "en": [
            "Fixed-route interviews",
            "Downtime inventory",
            "Service-return data cleanup"
          ],
          "ja": [
            "固定ルートヒアリング",
            "停止時間の棚卸し",
            "入庫データ整理"
          ]
        },
        "recommendedActions": {
          "zh": [
            "定義路線、載重、能源、維修與 ESG 欄位",
            "把 demo 指標和正式資料分開"
          ],
          "en": [
            "Define route, payload, energy, service, and ESG fields",
            "Separate demo indicators from formal data"
          ],
          "ja": [
            "ルート、積載、エネルギー、整備、ESG の項目を定義する",
            "demo 指標と正式データを分ける"
          ]
        },
        "requiredData": {
          "zh": [
            "年里程",
            "任務類型",
            "停車時間",
            "維修原因",
            "能源成本"
          ],
          "en": [
            "Annual mileage",
            "Mission type",
            "Downtime",
            "Service reason",
            "Energy cost"
          ],
          "ja": [
            "年間走行距離",
            "業務タイプ",
            "停止時間",
            "整備理由",
            "エネルギーコスト"
          ]
        },
        "dealerEducationTasks": {
          "zh": [
            "建立 TCO、BEV、FMS、ESG 的基礎說法",
            "訓練不得把 demo 數字說成承諾"
          ],
          "en": [
            "Create basic TCO, BEV, FMS, and ESG explanations",
            "Train teams not to present demo values as commitments"
          ],
          "ja": [
            "TCO、BEV、FMS、ESG の基本説明を作る",
            "demo 数値を約束として話さない教育を行う"
          ]
        },
        "customerPocSuggestions": {
          "zh": [
            "先做訪談與資料盤點，不急著宣稱技術適配"
          ],
          "en": [
            "Start with interviews and data inventory before making fit claims"
          ],
          "ja": [
            "適合性を主張する前に、ヒアリングとデータ棚卸しから始める"
          ]
        },
        "successMetrics": {
          "zh": [
            "資料欄位完成率",
            "訪談樣本數",
            "資料缺口清單"
          ],
          "en": [
            "Field-completion rate",
            "Interview sample count",
            "Data-gap list"
          ],
          "ja": [
            "項目完成率",
            "ヒアリング件数",
            "データギャップ一覧"
          ]
        },
        "risks": {
          "zh": [
            "資料定義不一致會讓後續 PoC 失真"
          ],
          "en": [
            "Inconsistent definitions distort later PoCs"
          ],
          "ja": [
            "定義の不一致は後続 PoC を歪める"
          ]
        },
        "validationNeeds": {
          "zh": [
            "需由商品、服務、通路與法規人員共同確認欄位"
          ],
          "en": [
            "Product, service, dealer, and compliance teams should review fields together"
          ],
          "ja": [
            "商品、サービス、販売チャネル、コンプライアンス担当で項目を確認する"
          ]
        },
        "glossaryTerms": [
          "tco",
          "bev",
          "fms",
          "esg"
        ]
      },
      {
        "id": "dealer_education",
        "periodId": "2026_2027",
        "startYear": 2026,
        "endYear": 2027,
        "theme": "safety",
        "strategyTheme": {
          "zh": "安全與 ADAS 教育基礎",
          "en": "Safety and ADAS education foundation",
          "ja": "安全と ADAS 教育の基礎"
        },
        "targetSegments": {
          "zh": [
            "市區配送",
            "客運",
            "工程車"
          ],
          "en": [
            "City delivery",
            "Bus operation",
            "Construction vehicles"
          ],
          "ja": [
            "市街地配送",
            "バス運行",
            "建設車両"
          ]
        },
        "customerScenarios": {
          "zh": [
            "駕駛教育",
            "車隊安全會議",
            "交車說明"
          ],
          "en": [
            "Driver education",
            "Fleet safety meetings",
            "Delivery handover"
          ],
          "ja": [
            "ドライバー教育",
            "フリート安全会議",
            "納車説明"
          ]
        },
        "recommendedActions": {
          "zh": [
            "整理 AEB、盲點、環景與疲勞警示的限制說法",
            "把 ADAS 定位為輔助與教育，不暗示事故消除"
          ],
          "en": [
            "Document limitation language for AEB, blind spot, surround view, and fatigue warning",
            "Frame ADAS as assistance and education, not accident elimination"
          ],
          "ja": [
            "AEB、死角、周辺視界、疲労警告の制約表現を整理する",
            "ADAS は支援と教育であり、事故ゼロを示唆しない"
          ]
        },
        "requiredData": {
          "zh": [
            "車型配備",
            "駕駛任務",
            "事故樣態",
            "通路訓練回饋"
          ],
          "en": [
            "Vehicle equipment",
            "Driver tasks",
            "Incident patterns",
            "Dealer-training feedback"
          ],
          "ja": [
            "車両装備",
            "運転業務",
            "事故パターン",
            "販売チャネル教育の反応"
          ]
        },
        "dealerEducationTasks": {
          "zh": [
            "建立常見問答",
            "設計系統限制說明",
            "演練不過度承諾的話術"
          ],
          "en": [
            "Build FAQ material",
            "Explain system limits",
            "Practice non-overclaiming language"
          ],
          "ja": [
            "FAQ を作成する",
            "システム限界を説明する",
            "過剰な約束を避ける話法を練習する"
          ]
        },
        "customerPocSuggestions": {
          "zh": [
            "用教育活動與駕駛回饋衡量理解度，不以 demo 分數作安全認證"
          ],
          "en": [
            "Use education sessions and driver feedback to measure understanding, not demo scores as safety certification"
          ],
          "ja": [
            "教育会とドライバー反応で理解度を見る。demo スコアを安全認証にしない"
          ]
        },
        "successMetrics": {
          "zh": [
            "FAQ 完成度",
            "訓練參與率",
            "限制說明理解度"
          ],
          "en": [
            "FAQ readiness",
            "Training participation",
            "Limit-understanding score"
          ],
          "ja": [
            "FAQ 完成度",
            "教育参加率",
            "制約理解度"
          ]
        },
        "risks": {
          "zh": [
            "若語氣過度，會造成自動駕駛或安全保證的誤解"
          ],
          "en": [
            "Overclaiming can imply autonomy or guaranteed safety"
          ],
          "ja": [
            "過剰表現は自動運転や安全保証の誤解を生む"
          ]
        },
        "validationNeeds": {
          "zh": [
            "正式文案需對照實車規格、手冊、法規與安全審查"
          ],
          "en": [
            "Formal copy needs review against vehicle specs, manuals, regulation, and safety review"
          ],
          "ja": [
            "正式文言は車両仕様、取扱説明書、規制、安全確認と照合する"
          ]
        },
        "glossaryTerms": [
          "adas",
          "ai-governance",
          "poc"
        ]
      },
      {
        "id": "fixed_route_bev_poc",
        "periodId": "2028_2030",
        "startYear": 2028,
        "endYear": 2030,
        "theme": "energy",
        "strategyTheme": {
          "zh": "固定路線 BEV PoC",
          "en": "Fixed-route BEV PoC",
          "ja": "固定ルート BEV PoC"
        },
        "targetSegments": {
          "zh": [
            "都市配送",
            "短程冷鏈",
            "園區物流"
          ],
          "en": [
            "Urban delivery",
            "Short-haul cold chain",
            "Closed logistics parks"
          ],
          "ja": [
            "都市配送",
            "短距離コールドチェーン",
            "構内物流"
          ]
        },
        "customerScenarios": {
          "zh": [
            "路線可預測",
            "夜間場站充電",
            "停車時間可控"
          ],
          "en": [
            "Predictable routes",
            "Overnight depot charging",
            "Managed downtime"
          ],
          "ja": [
            "予測可能なルート",
            "夜間の拠点充電",
            "管理可能な停止時間"
          ]
        },
        "recommendedActions": {
          "zh": [
            "選擇固定任務做小規模 PoC",
            "用 TCO 與 SOH 指標追蹤條件，不宣稱全面替代"
          ],
          "en": [
            "Run small PoCs on fixed missions",
            "Track conditions with TCO and SOH indicators without claiming broad replacement"
          ],
          "ja": [
            "固定業務で小規模 PoC を行う",
            "TCO と SOH で条件を追跡し、全面代替を主張しない"
          ]
        },
        "requiredData": {
          "zh": [
            "日行駛距離",
            "載重",
            "充電功率",
            "電價",
            "停車窗口",
            "電池 SOH"
          ],
          "en": [
            "Daily distance",
            "Payload",
            "Charging power",
            "Electricity price",
            "Downtime window",
            "Battery SOH"
          ],
          "ja": [
            "日走行距離",
            "積載",
            "充電出力",
            "電力価格",
            "停止時間",
            "電池 SOH"
          ]
        },
        "dealerEducationTasks": {
          "zh": [
            "說明 BEV 適合條件",
            "教育充電、電池健康與殘值風險"
          ],
          "en": [
            "Explain BEV fit conditions",
            "Educate on charging, battery health, and residual-value risk"
          ],
          "ja": [
            "BEV が適する条件を説明する",
            "充電、電池状態、残価リスクを教育する"
          ]
        },
        "customerPocSuggestions": {
          "zh": [
            "以一到兩條固定路線測試，不延伸為全車隊建議"
          ],
          "en": [
            "Test one or two fixed routes before extending to fleet-wide recommendations"
          ],
          "ja": [
            "一から二本の固定ルートで試し、全車隊提案へ急がない"
          ]
        },
        "successMetrics": {
          "zh": [
            "準點率",
            "充電成功率",
            "停車時間影響",
            "demo TCO 趨勢"
          ],
          "en": [
            "On-time rate",
            "Charging success",
            "Downtime impact",
            "Demo TCO trend"
          ],
          "ja": [
            "定時率",
            "充電成功率",
            "停止時間への影響",
            "demo TCO 傾向"
          ]
        },
        "risks": {
          "zh": [
            "路線臨時變動、充電容量不足或載重變化會降低適配度"
          ],
          "en": [
            "Route changes, weak charging capacity, or payload variation can reduce fit"
          ],
          "ja": [
            "ルート変更、充電容量不足、積載変動は適合性を下げる"
          ]
        },
        "validationNeeds": {
          "zh": [
            "需以實際車型、能源價格、場站條件與維修能力覆核"
          ],
          "en": [
            "Validate with actual vehicle specs, energy prices, depot conditions, and service capability"
          ],
          "ja": [
            "実車仕様、エネルギー価格、拠点条件、整備能力で確認する"
          ]
        },
        "glossaryTerms": [
          "bev",
          "poc",
          "tco",
          "soh"
        ]
      },
      {
        "id": "fleet_service_poc",
        "periodId": "2028_2030",
        "startYear": 2028,
        "endYear": 2030,
        "theme": "connected_fleet",
        "strategyTheme": {
          "zh": "FMS 服務 PoC",
          "en": "FMS service PoC",
          "ja": "FMS サービス PoC"
        },
        "targetSegments": {
          "zh": [
            "車隊租賃",
            "冷鏈物流",
            "客運"
          ],
          "en": [
            "Fleet leasing",
            "Cold-chain logistics",
            "Bus operation"
          ],
          "ja": [
            "フリートリース",
            "コールドチェーン",
            "バス運行"
          ]
        },
        "customerScenarios": {
          "zh": [
            "保養排程",
            "遠端診斷",
            "駕駛行為教育"
          ],
          "en": [
            "Maintenance scheduling",
            "Remote diagnostics",
            "Driver-behavior education"
          ],
          "ja": [
            "保守スケジュール",
            "遠隔診断",
            "運転行動教育"
          ]
        },
        "recommendedActions": {
          "zh": [
            "建立資料同意、清理與服務回應流程",
            "用小規模客戶報告驗證可讀性"
          ],
          "en": [
            "Create consent, data-cleaning, and service-response flows",
            "Validate readability through small customer reports"
          ],
          "ja": [
            "同意、データ整備、サービス対応の流れを作る",
            "小規模な顧客レポートで読みやすさを検証する"
          ]
        },
        "requiredData": {
          "zh": [
            "里程",
            "故障碼",
            "維修工單",
            "駕駛事件",
            "客戶同意"
          ],
          "en": [
            "Mileage",
            "Fault codes",
            "Repair orders",
            "Driver events",
            "Customer consent"
          ],
          "ja": [
            "走行距離",
            "故障コード",
            "整備オーダー",
            "運転イベント",
            "顧客同意"
          ]
        },
        "dealerEducationTasks": {
          "zh": [
            "說明 FMS 不等於即時監控承諾",
            "建立資料治理與服務升級話術"
          ],
          "en": [
            "Explain that FMS is not a blanket real-time monitoring promise",
            "Build data-governance and service-escalation language"
          ],
          "ja": [
            "FMS は包括的なリアルタイム監視の約束ではないと説明する",
            "データガバナンスとサービス対応の説明を作る"
          ]
        },
        "customerPocSuggestions": {
          "zh": [
            "先以保養提醒或月報為範圍，避免收集過多敏感資料"
          ],
          "en": [
            "Begin with maintenance reminders or monthly reports and avoid excessive sensitive data"
          ],
          "ja": [
            "保守通知や月次レポートから始め、過度な機微データ収集を避ける"
          ]
        },
        "successMetrics": {
          "zh": [
            "報告閱讀率",
            "服務回應時間",
            "保養準時率",
            "資料品質"
          ],
          "en": [
            "Report-read rate",
            "Service response time",
            "Maintenance punctuality",
            "Data quality"
          ],
          "ja": [
            "レポート閲覧率",
            "サービス応答時間",
            "保守の定時性",
            "データ品質"
          ]
        },
        "risks": {
          "zh": [
            "若同意、資安或服務流程不足，會削弱客戶信任"
          ],
          "en": [
            "Weak consent, cybersecurity, or service workflow can erode trust"
          ],
          "ja": [
            "同意、サイバーセキュリティ、サービス手順が弱いと信頼を損なう"
          ]
        },
        "validationNeeds": {
          "zh": [
            "需法務、資安、服務與客戶窗口共同審查"
          ],
          "en": [
            "Legal, cybersecurity, service, and customer-facing teams should review together"
          ],
          "ja": [
            "法務、サイバーセキュリティ、サービス、顧客窓口で確認する"
          ]
        },
        "glossaryTerms": [
          "fms",
          "poc",
          "kpi",
          "ai-governance"
        ]
      },
      {
        "id": "carbon_reporting_pilot",
        "periodId": "2028_2030",
        "startYear": 2028,
        "endYear": 2030,
        "theme": "esg",
        "strategyTheme": {
          "zh": "碳追蹤 demo 報告",
          "en": "Carbon-tracking demo report",
          "ja": "炭素追跡 demo レポート"
        },
        "targetSegments": {
          "zh": [
            "企業車隊",
            "冷鏈物流",
            "客運"
          ],
          "en": [
            "Corporate fleets",
            "Cold-chain logistics",
            "Bus operation"
          ],
          "ja": [
            "企業フリート",
            "コールドチェーン",
            "バス運行"
          ]
        },
        "customerScenarios": {
          "zh": [
            "ESG 壓力提升",
            "油電轉換評估",
            "內部管理報告"
          ],
          "en": [
            "Rising ESG pressure",
            "Diesel-to-electric assessment",
            "Internal management reporting"
          ],
          "ja": [
            "ESG 圧力の上昇",
            "ディーゼルから電動への評価",
            "内部管理レポート"
          ]
        },
        "recommendedActions": {
          "zh": [
            "將活動資料、能源係數與邊界假設分層呈現",
            "清楚標示 demo 不可作正式揭露"
          ],
          "en": [
            "Separate activity data, energy factors, and boundary assumptions",
            "Clearly state that demo reports are not formal disclosure"
          ],
          "ja": [
            "活動データ、エネルギー係数、境界仮定を分けて示す",
            "demo レポートは正式開示ではないと明示する"
          ]
        },
        "requiredData": {
          "zh": [
            "燃料用量",
            "電力係數",
            "再生能源比例",
            "里程",
            "載重",
            "盤查邊界"
          ],
          "en": [
            "Fuel use",
            "Electricity factors",
            "Renewable share",
            "Mileage",
            "Payload",
            "Accounting boundary"
          ],
          "ja": [
            "燃料使用量",
            "電力係数",
            "再生可能比率",
            "走行距離",
            "積載",
            "算定境界"
          ]
        },
        "dealerEducationTasks": {
          "zh": [
            "教育 CO2e、KPI 與正式盤查差異",
            "避免把 demo 減量說成已驗證成果"
          ],
          "en": [
            "Explain CO2e, KPI, and formal-accounting differences",
            "Avoid presenting demo differences as verified reductions"
          ],
          "ja": [
            "CO2e、KPI、正式算定との差を説明する",
            "demo 差分を検証済み削減として示さない"
          ]
        },
        "customerPocSuggestions": {
          "zh": [
            "以內部管理儀表板試行，不直接進入永續報告"
          ],
          "en": [
            "Pilot as an internal management dashboard, not sustainability disclosure"
          ],
          "ja": [
            "内部管理ダッシュボードとして試し、サステナビリティ開示へ直結させない"
          ]
        },
        "successMetrics": {
          "zh": [
            "資料可追溯性",
            "更新日期完整度",
            "人工審查紀錄"
          ],
          "en": [
            "Traceability",
            "Update-date completeness",
            "Human-review record"
          ],
          "ja": [
            "追跡可能性",
            "更新日記録",
            "人による確認記録"
          ]
        },
        "risks": {
          "zh": [
            "係數過期或邊界不清會讓推論不適合公開使用"
          ],
          "en": [
            "Outdated factors or unclear boundaries make conclusions unsuitable for public use"
          ],
          "ja": [
            "古い係数や曖昧な境界は公開利用に適さない結論を生む"
          ]
        },
        "validationNeeds": {
          "zh": [
            "需永續、財務、法務與客戶共同確認方法"
          ],
          "en": [
            "Sustainability, finance, legal, and customer teams should review the method"
          ],
          "ja": [
            "サステナビリティ、財務、法務、顧客側で方法を確認する"
          ]
        },
        "glossaryTerms": [
          "esg",
          "kpi",
          "carbon-accounting",
          "tco"
        ]
      },
      {
        "id": "predictive_maintenance_maturity",
        "periodId": "2031_2033",
        "startYear": 2031,
        "endYear": 2033,
        "theme": "connected_fleet",
        "strategyTheme": {
          "zh": "預測維修成熟化",
          "en": "Predictive-maintenance maturity",
          "ja": "予知保全の成熟"
        },
        "targetSegments": {
          "zh": [
            "高里程車隊",
            "冷鏈物流",
            "客運"
          ],
          "en": [
            "High-mileage fleets",
            "Cold-chain logistics",
            "Bus operation"
          ],
          "ja": [
            "高走行フリート",
            "コールドチェーン",
            "バス運行"
          ]
        },
        "customerScenarios": {
          "zh": [
            "停車成本高",
            "保養排程密集",
            "服務網絡需協同"
          ],
          "en": [
            "High downtime cost",
            "Dense maintenance schedule",
            "Coordinated service network"
          ],
          "ja": [
            "停止コストが高い",
            "保守頻度が高い",
            "サービス網の連携が必要"
          ]
        },
        "recommendedActions": {
          "zh": [
            "把診斷資料、工單與零件需求連成服務流程",
            "用 AI 輔助排序，但保留人工判斷"
          ],
          "en": [
            "Connect diagnostics, repair orders, and parts demand into service workflows",
            "Use AI-assisted prioritization while keeping human judgment"
          ],
          "ja": [
            "診断、整備オーダー、部品需要をサービス工程につなぐ",
            "AI 支援の優先順位付けを使い、人の判断を残す"
          ]
        },
        "requiredData": {
          "zh": [
            "故障碼歷史",
            "零件庫存",
            "維修工時",
            "SOH",
            "客戶停車成本"
          ],
          "en": [
            "Fault-code history",
            "Parts inventory",
            "Labor hours",
            "SOH",
            "Customer downtime cost"
          ],
          "ja": [
            "故障コード履歴",
            "部品在庫",
            "整備工数",
            "SOH",
            "顧客停止コスト"
          ]
        },
        "dealerEducationTasks": {
          "zh": [
            "訓練服務顧問解讀預測分數限制",
            "建立人工覆核節點"
          ],
          "en": [
            "Train service advisors to explain prediction-score limits",
            "Create human-review checkpoints"
          ],
          "ja": [
            "サービス担当が予測スコアの限界を説明できるようにする",
            "人による確認点を作る"
          ]
        },
        "customerPocSuggestions": {
          "zh": [
            "從特定零件或電池健康提醒開始，不承諾完全避免故障"
          ],
          "en": [
            "Start with selected parts or battery-health reminders without promising failure prevention"
          ],
          "ja": [
            "特定部品や電池状態通知から始め、故障防止を約束しない"
          ]
        },
        "successMetrics": {
          "zh": [
            "提前提醒命中率",
            "誤報率",
            "服務回應時間",
            "停車時間變化"
          ],
          "en": [
            "Early-alert precision",
            "False-positive rate",
            "Service response time",
            "Downtime change"
          ],
          "ja": [
            "事前通知の精度",
            "誤検知率",
            "サービス応答時間",
            "停止時間の変化"
          ]
        },
        "risks": {
          "zh": [
            "資料偏差或服務量能不足會讓預測無法轉成客戶價值"
          ],
          "en": [
            "Data bias or insufficient service capacity prevents predictions from becoming customer value"
          ],
          "ja": [
            "データ偏りやサービス能力不足は予測を顧客価値に変えにくくする"
          ]
        },
        "validationNeeds": {
          "zh": [
            "需資安、服務、零件與客戶營運資料共同驗證"
          ],
          "en": [
            "Validate with cybersecurity, service, parts, and customer operation data"
          ],
          "ja": [
            "サイバーセキュリティ、サービス、部品、顧客運用データで検証する"
          ]
        },
        "glossaryTerms": [
          "fms",
          "ai-governance",
          "soh",
          "kpi"
        ]
      },
      {
        "id": "ecosystem_expansion",
        "periodId": "2031_2033",
        "startYear": 2031,
        "endYear": 2033,
        "theme": "scenario",
        "strategyTheme": {
          "zh": "跨模組情境組合",
          "en": "Cross-module scenario packaging",
          "ja": "横断的なシナリオ設計"
        },
        "targetSegments": {
          "zh": [
            "企業車隊",
            "物流園區",
            "公共運輸"
          ],
          "en": [
            "Corporate fleets",
            "Logistics parks",
            "Public transport"
          ],
          "ja": [
            "企業フリート",
            "物流拠点",
            "公共交通"
          ]
        },
        "customerScenarios": {
          "zh": [
            "能源、維修、安全與 ESG 同時被要求",
            "採購決策需要多部門共識"
          ],
          "en": [
            "Energy, maintenance, safety, and ESG demands converge",
            "Procurement decisions need cross-functional agreement"
          ],
          "ja": [
            "エネルギー、整備、安全、ESG 要求が重なる",
            "調達判断に部門横断の合意が必要"
          ]
        },
        "recommendedActions": {
          "zh": [
            "把情境模擬器輸出轉成客戶訪談包",
            "建立跨部門決策地圖"
          ],
          "en": [
            "Turn scenario-simulator output into customer interview packs",
            "Build a cross-functional decision map"
          ],
          "ja": [
            "シナリオシミュレーターの出力を顧客ヒアリング資料にする",
            "部門横断の意思決定マップを作る"
          ]
        },
        "requiredData": {
          "zh": [
            "部門角色",
            "採購條件",
            "能源限制",
            "安全需求",
            "ESG 報告需求"
          ],
          "en": [
            "Department roles",
            "Procurement criteria",
            "Energy constraints",
            "Safety needs",
            "ESG reporting needs"
          ],
          "ja": [
            "部門役割",
            "調達条件",
            "エネルギー制約",
            "安全ニーズ",
            "ESG レポート需要"
          ]
        },
        "dealerEducationTasks": {
          "zh": [
            "訓練通路以條件式語言協助客戶排序",
            "避免單一技術萬用說法"
          ],
          "en": [
            "Train dealers to help customers prioritize with conditional language",
            "Avoid one-size-fits-all technology claims"
          ],
          "ja": [
            "条件付きの言葉で顧客の優先順位付けを支援する",
            "単一技術が万能という表現を避ける"
          ]
        },
        "customerPocSuggestions": {
          "zh": [
            "用一個任務場景串接 BEV、ADAS、FMS 與 ESG 報告假設"
          ],
          "en": [
            "Use one mission scenario to connect BEV, ADAS, FMS, and ESG reporting assumptions"
          ],
          "ja": [
            "一つの業務シナリオで BEV、ADAS、FMS、ESG レポート仮定をつなぐ"
          ]
        },
        "successMetrics": {
          "zh": [
            "客戶決策角色確認率",
            "條件假設完整度",
            "後續 PoC 可行性"
          ],
          "en": [
            "Decision-role clarity",
            "Condition-assumption completeness",
            "PoC feasibility"
          ],
          "ja": [
            "意思決定役割の明確度",
            "条件仮定の完成度",
            "PoC 実行可能性"
          ]
        },
        "risks": {
          "zh": [
            "若把情境輸出當成正式推薦，會忽略客戶內部限制"
          ],
          "en": [
            "Treating scenario output as formal recommendation can miss customer constraints"
          ],
          "ja": [
            "シナリオ出力を正式提案にすると顧客側の制約を見落とす"
          ]
        },
        "validationNeeds": {
          "zh": [
            "需客戶訪談、營運資料與內部審查共同校正"
          ],
          "en": [
            "Validate with customer interviews, operating data, and internal review"
          ],
          "ja": [
            "顧客ヒアリング、運用データ、内部確認で補正する"
          ]
        },
        "glossaryTerms": [
          "bev",
          "adas",
          "fms",
          "esg",
          "poc"
        ]
      },
      {
        "id": "hydrogen_v2g_tracking",
        "periodId": "2034_2035",
        "startYear": 2034,
        "endYear": 2035,
        "theme": "energy",
        "strategyTheme": {
          "zh": "氫能與 V2G 長期追蹤",
          "en": "Hydrogen and V2G long-term tracking",
          "ja": "水素と V2G の長期追跡"
        },
        "targetSegments": {
          "zh": [
            "長途貨運",
            "高載重任務",
            "能源韌性場景"
          ],
          "en": [
            "Long-haul freight",
            "Heavy-payload missions",
            "Energy-resilience scenarios"
          ],
          "ja": [
            "長距離輸送",
            "高積載業務",
            "エネルギーレジリエンス場面"
          ]
        },
        "customerScenarios": {
          "zh": [
            "基礎設施未成熟但需要監測",
            "政策或能源價格可能改變條件"
          ],
          "en": [
            "Infrastructure is immature but needs monitoring",
            "Policy or energy-price shifts may change fit"
          ],
          "ja": [
            "インフラは未成熟だが監視が必要",
            "政策やエネルギー価格で条件が変わる可能性"
          ]
        },
        "recommendedActions": {
          "zh": [
            "保留追蹤指標，不把觀察項目包裝成近期導入",
            "建立氫能、V2G 與電網條件觀察清單"
          ],
          "en": [
            "Keep tracking indicators without packaging observations as near-term deployment",
            "Create hydrogen, V2G, and grid-condition watchlists"
          ],
          "ja": [
            "観察項目を短期導入として扱わず、追跡指標を残す",
            "水素、V2G、系統条件のウォッチリストを作る"
          ]
        },
        "requiredData": {
          "zh": [
            "加氫站位置",
            "能源價格",
            "車型供給",
            "電網互動規範",
            "服務能力"
          ],
          "en": [
            "Hydrogen station locations",
            "Energy prices",
            "Vehicle supply",
            "Grid-interaction rules",
            "Service capability"
          ],
          "ja": [
            "水素ステーション位置",
            "エネルギー価格",
            "車両供給",
            "系統連携ルール",
            "整備能力"
          ]
        },
        "dealerEducationTasks": {
          "zh": [
            "教育追蹤與導入的差異",
            "避免把國際訊號直接套用台灣市場"
          ],
          "en": [
            "Explain the difference between tracking and implementation",
            "Avoid transferring global signals directly into Taiwan-market claims"
          ],
          "ja": [
            "追跡と導入の違いを説明する",
            "海外信号を台湾市場へ直接当てはめない"
          ]
        },
        "customerPocSuggestions": {
          "zh": [
            "僅在基礎設施與服務條件明確時設計封閉場域概念驗證"
          ],
          "en": [
            "Design closed-site concept validation only when infrastructure and service conditions are clear"
          ],
          "ja": [
            "インフラとサービス条件が明確な場合のみ、閉域で概念検証を設計する"
          ]
        },
        "successMetrics": {
          "zh": [
            "基礎設施成熟度",
            "政策明確度",
            "TCO 條件變化",
            "服務準備度"
          ],
          "en": [
            "Infrastructure maturity",
            "Policy clarity",
            "TCO condition shift",
            "Service readiness"
          ],
          "ja": [
            "インフラ成熟度",
            "政策明確度",
            "TCO 条件変化",
            "サービス準備度"
          ]
        },
        "risks": {
          "zh": [
            "過早承諾會造成商品企劃與通路教育壓力"
          ],
          "en": [
            "Premature commitment creates product-planning and dealer-education pressure"
          ],
          "ja": [
            "早すぎる約束は商品企画と販売チャネル教育に負荷をかける"
          ]
        },
        "validationNeeds": {
          "zh": [
            "需以最新政策、能源基礎設施、車型供給與服務能力覆核"
          ],
          "en": [
            "Review against current policy, energy infrastructure, vehicle supply, and service capability"
          ],
          "ja": [
            "最新政策、エネルギーインフラ、車両供給、整備能力で確認する"
          ]
        },
        "glossaryTerms": [
          "fcev",
          "v2g",
          "tco",
          "poc"
        ]
      },
      {
        "id": "bounded_automation_observation",
        "periodId": "2034_2035",
        "startYear": 2034,
        "endYear": 2035,
        "theme": "safety",
        "strategyTheme": {
          "zh": "封閉場域自動化觀察",
          "en": "Bounded automation observation",
          "ja": "限定領域自動化の観察"
        },
        "targetSegments": {
          "zh": [
            "封閉物流園區",
            "港區或廠區",
            "固定低速任務"
          ],
          "en": [
            "Closed logistics parks",
            "Port or plant sites",
            "Fixed low-speed missions"
          ],
          "ja": [
            "閉域物流拠点",
            "港湾・工場エリア",
            "固定低速業務"
          ]
        },
        "customerScenarios": {
          "zh": [
            "ODD 明確",
            "低速固定動線",
            "人車混流風險需管理"
          ],
          "en": [
            "Defined ODD",
            "Fixed low-speed paths",
            "Managed mixed-traffic risk"
          ],
          "ja": [
            "ODD が明確",
            "固定低速経路",
            "人車混在リスクの管理"
          ]
        },
        "recommendedActions": {
          "zh": [
            "以 ODD、責任邊界與安全管理語言追蹤",
            "不把封閉場域 demo 延伸成一般道路能力"
          ],
          "en": [
            "Track ODD, responsibility boundaries, and safety-management language",
            "Do not extend closed-site demos into general-road capability claims"
          ],
          "ja": [
            "ODD、責任境界、安全管理の表現で追跡する",
            "閉域 demo を一般道路能力の主張へ広げない"
          ]
        },
        "requiredData": {
          "zh": [
            "場域動線",
            "人車互動",
            "速度限制",
            "責任分工",
            "法規邊界"
          ],
          "en": [
            "Site paths",
            "Human-vehicle interaction",
            "Speed limits",
            "Responsibility split",
            "Regulatory boundary"
          ],
          "ja": [
            "場内経路",
            "人車相互作用",
            "速度制限",
            "責任分担",
            "規制境界"
          ]
        },
        "dealerEducationTasks": {
          "zh": [
            "清楚區分 ADAS、L4、ODD 與 AI 輔助決策"
          ],
          "en": [
            "Differentiate ADAS, L4, ODD, and AI-assisted decisions"
          ],
          "ja": [
            "ADAS、L4、ODD、AI 支援判断を区別する"
          ]
        },
        "customerPocSuggestions": {
          "zh": [
            "若要 PoC，先限定封閉場域、速度、任務與安全監督條件"
          ],
          "en": [
            "If a PoC is considered, constrain site, speed, mission, and safety supervision first"
          ],
          "ja": [
            "PoC を検討する場合、場域、速度、業務、安全監督条件を先に限定する"
          ]
        },
        "successMetrics": {
          "zh": [
            "ODD 文件完整度",
            "風險審查紀錄",
            "人工接管或監督規則"
          ],
          "en": [
            "ODD documentation",
            "Risk-review record",
            "Human takeover or supervision rules"
          ],
          "ja": [
            "ODD 文書完成度",
            "リスク確認記録",
            "人の介入・監督ルール"
          ]
        },
        "risks": {
          "zh": [
            "過度描述會誤導為無限制自動駕駛能力"
          ],
          "en": [
            "Overstatement can imply unrestricted autonomous capability"
          ],
          "ja": [
            "過剰表現は無制限の自動運転能力を示唆する"
          ]
        },
        "validationNeeds": {
          "zh": [
            "需安全、法規、保險、客戶現場與工程資料共同審查"
          ],
          "en": [
            "Safety, regulation, insurance, customer-site, and engineering evidence should be reviewed together"
          ],
          "ja": [
            "安全、規制、保険、顧客現場、技術資料を合わせて確認する"
          ]
        },
        "glossaryTerms": [
          "adas",
          "odd",
          "ai-governance",
          "poc"
        ]
      }
    ],
    "guidedDemoSteps": [
      {
        "id": "home",
        "targetId": "home",
        "durationSeconds": 25,
        "title": {
          "zh": "定位：商用車策略實驗室",
          "en": "Positioning: commercial vehicle strategy lab",
          "ja": "位置づけ：商用車戦略ラボ"
        },
        "body": {
          "zh": "先說明這是靜態作品集原型，所有數據都是 demo 假設，並保留 Home-only 著作權與創作動機。",
          "en": "Start by framing the site as a static portfolio prototype with demo assumptions, while keeping the Home-only copyright and motivation content.",
          "ja": "静的ポートフォリオ原型であり、すべて demo 仮定であることを先に説明します。Home 限定の著作権と動機も保ちます。"
        }
      },
      {
        "id": "trend",
        "targetId": "trend-radar",
        "durationSeconds": 35,
        "title": {
          "zh": "訊號：不是預測，而是排序",
          "en": "Signals: prioritization, not prediction",
          "ja": "信号：予測ではなく優先順位"
        },
        "body": {
          "zh": "用趨勢雷達說明 BEV、FCEV、V2G、ADAS、FMS 與 ESG 等訊號如何先被當作企劃優先順序。",
          "en": "Use Trend Radar to show how BEV, FCEV, V2G, ADAS, FMS, and ESG signals become planning priorities before claims.",
          "ja": "Trend Radar で BEV、FCEV、V2G、ADAS、FMS、ESG などを主張ではなく企画優先度として扱うことを示します。"
        }
      },
      {
        "id": "maturity",
        "targetId": "technology-maturity-map",
        "durationSeconds": 35,
        "title": {
          "zh": "成熟度：避免 buzzword 化",
          "en": "Maturity: avoid buzzword planning",
          "ja": "成熟度：バズワード化を避ける"
        },
        "body": {
          "zh": "用成熟度地圖把技術放進教育、PoC、追蹤或暫緩，而不是把每個新技術都說成必然導入。",
          "en": "Use the maturity map to place technologies into education, PoC, tracking, or deferred observation rather than assuming adoption.",
          "ja": "成熟度マップで技術を教育、PoC、追跡、保留に分け、すべてを導入前提にしないことを示します。"
        }
      },
      {
        "id": "scenario",
        "targetId": "scenario-simulator",
        "durationSeconds": 40,
        "title": {
          "zh": "情境：條件先於答案",
          "en": "Scenario: conditions before answers",
          "ja": "シナリオ：答えより条件が先"
        },
        "body": {
          "zh": "展示路線、里程、載重、停車敏感度與基礎設施如何改變建議層級。",
          "en": "Show how route, mileage, payload, downtime sensitivity, and infrastructure change recommendation layers.",
          "ja": "ルート、走行距離、積載、停止感度、インフラが提案層を変えることを示します。"
        }
      },
      {
        "id": "energy",
        "targetId": "energy-roadmap",
        "durationSeconds": 35,
        "title": {
          "zh": "能源：以條件說明適配",
          "en": "Energy: fit through conditions",
          "ja": "エネルギー：条件で適合を説明"
        },
        "body": {
          "zh": "用能源路線圖說明柴油、混合動力、BEV、FCEV、V2G 與充電條件的取捨。",
          "en": "Use the Energy Roadmap to explain tradeoffs across diesel, hybrid, BEV, FCEV, V2G, and charging readiness.",
          "ja": "Energy Roadmap でディーゼル、ハイブリッド、BEV、FCEV、V2G、充電準備度の条件を説明します。"
        }
      },
      {
        "id": "safety",
        "targetId": "safety-adas-lab",
        "durationSeconds": 30,
        "title": {
          "zh": "安全：把限制講清楚",
          "en": "Safety: make limits explicit",
          "ja": "安全：制約を明確にする"
        },
        "body": {
          "zh": "說明 ADAS 教育、系統限制與不得過度承諾的品牌安全邊界。",
          "en": "Explain ADAS education, system limits, and brand-safe non-overclaiming boundaries.",
          "ja": "ADAS 教育、システム限界、過剰表現を避ける境界を説明します。"
        }
      },
      {
        "id": "fleet",
        "targetId": "connected-fleet-lab",
        "durationSeconds": 35,
        "title": {
          "zh": "車聯網：服務與治理並行",
          "en": "Connected fleet: service and governance together",
          "ja": "コネクテッド：サービスとガバナンスを並行"
        },
        "body": {
          "zh": "展示 FMS 如何連到維修、資料治理、客戶報告與營運效率，但不收集真實資料。",
          "en": "Show how FMS connects maintenance, governance, reporting, and operating efficiency without collecting real data.",
          "ja": "FMS が整備、ガバナンス、レポート、運用効率につながる一方、実データは収集しないことを示します。"
        }
      },
      {
        "id": "esg",
        "targetId": "esg-policy-dashboard",
        "durationSeconds": 35,
        "title": {
          "zh": "ESG：來源與方法要驗證",
          "en": "ESG: sources and methods need validation",
          "ja": "ESG：出典と方法の検証が必要"
        },
        "body": {
          "zh": "說明政策、補助與碳估算只是 demo 訊號，正式使用需最新來源、排放係數與人工審查。",
          "en": "Explain that policy, subsidy, and carbon estimates are demo signals requiring current sources, emission factors, and human review.",
          "ja": "政策、補助、炭素推計は demo 信号であり、最新出典、排出係数、人による確認が必要です。"
        }
      },
      {
        "id": "roadmap",
        "targetId": "strategy-roadmap-studio",
        "durationSeconds": 45,
        "title": {
          "zh": "輸出：路線圖不是上市承諾",
          "en": "Output: roadmap is not a launch promise",
          "ja": "出力：ロードマップは発売約束ではない"
        },
        "body": {
          "zh": "最後把 2026 至 2035 的教育、PoC、成熟化與長期追蹤合併成可溝通的企劃節奏。",
          "en": "Close by combining education, PoC, maturity, and long-term tracking into a communicable planning cadence.",
          "ja": "最後に教育、PoC、成熟化、長期追跡を伝えやすい企画リズムへまとめます。"
        }
      }
    ]
  },
  "data/technology_maturity.json": {
    "meta": {
      "schemaVersion": "1.0.0",
      "dataStatus": "demo_assumptions",
      "moduleId": "technology-maturity-map",
      "sourceBasis": "Portfolio proposal strategy narrative, converted into illustrative technology-readiness planning assumptions.",
      "axis": {
        "x": "maturity_score",
        "y": "business_value_score",
        "bubbleSize": "implementation_cost",
        "color": "regulation_risk"
      },
      "source_limitations": {
        "zh": "本成熟度地圖是作品集示範，不代表正式技術評估。實際企劃需加入車型供應、台灣法規、路線與載重、能源補給、售後能力、成本與通路教育驗證。",
        "en": "This maturity map is a portfolio demonstration, not a formal technology assessment. Real planning needs validation against vehicle supply, Taiwan regulation, routes and payloads, energy access, after-sales capability, cost, and dealer education.",
        "ja": "この成熟度マップはポートフォリオ用のデモであり、正式な技術評価ではありません。実際の企画では、車両供給、台湾の規制、ルートと積載、エネルギー補給、アフターサービス能力、コスト、販売店教育を検証する必要があります。"
      }
    },
    "technologies": [
      {
        "technology_id": "fms_platform",
        "category": "data_services",
        "name": {
          "zh": "車隊管理系統平台",
          "en": "Fleet Management System Platform",
          "ja": "車隊管理システムプラットフォーム"
        },
        "shortName": {
          "zh": "FMS 平台",
          "en": "FMS Platform",
          "ja": "FMS 基盤"
        },
        "glossaryTerms": [
          "fms",
          "kpi",
          "dealer"
        ],
        "maturity_score": 82,
        "business_value_score": 84,
        "implementation_cost": 58,
        "regulation_risk": 42,
        "dealer_training_difficulty": 64,
        "service_readiness": 78,
        "recommended_status": "near_term_education",
        "risk_level": "medium",
        "suitable_scenarios": {
          "zh": [
            "固定或半固定路線車隊",
            "重視稼動率與保養排程的客戶",
            "需要售後服務可視化的營運場景"
          ],
          "en": [
            "Fixed or semi-fixed route fleets",
            "Customers focused on uptime and maintenance scheduling",
            "Operations that need more visible after-sales workflows"
          ],
          "ja": [
            "固定または半固定ルートの車隊",
            "稼働率と整備計画を重視する顧客",
            "アフターサービスの可視化が必要な運用"
          ]
        },
        "planning_notes": {
          "zh": "適合先從客戶教育、KPI 定義與服務流程設計開始，避免一開始就承諾完整資料平台成效。",
          "en": "Start with customer education, KPI definition, and service workflow design before promising full platform outcomes.",
          "ja": "最初は顧客教育、KPI 定義、サービス業務設計から始め、完全なデータ基盤効果を早期に約束しないことが重要です。"
        }
      },
      {
        "technology_id": "predictive_maintenance",
        "category": "data_services",
        "name": {
          "zh": "預知保養",
          "en": "Predictive Maintenance",
          "ja": "予知保全"
        },
        "shortName": {
          "zh": "預知保養",
          "en": "Predictive Maintenance",
          "ja": "予知保全"
        },
        "glossaryTerms": [
          "fms",
          "ai-governance",
          "kpi"
        ],
        "maturity_score": 68,
        "business_value_score": 78,
        "implementation_cost": 62,
        "regulation_risk": 46,
        "dealer_training_difficulty": 68,
        "service_readiness": 62,
        "recommended_status": "poc_planning",
        "risk_level": "medium",
        "suitable_scenarios": {
          "zh": [
            "高里程車隊",
            "停車損失敏感的物流客戶",
            "願意提供維修與故障資料的合作客戶"
          ],
          "en": [
            "High-mileage fleets",
            "Logistics customers sensitive to downtime",
            "Partner customers willing to share maintenance and fault data"
          ],
          "ja": [
            "高走行距離の車隊",
            "停止時間に敏感な物流顧客",
            "整備・故障データを共有できる協力顧客"
          ]
        },
        "planning_notes": {
          "zh": "可進入 PoC，但必須先界定資料品質、人審流程與責任邊界，避免把模型建議說成保證維修結果。",
          "en": "Suitable for PoC planning, but data quality, human review, and accountability boundaries must be defined before model suggestions are used.",
          "ja": "PoC には適していますが、モデル提案を使う前にデータ品質、人による確認、責任範囲を定義する必要があります。"
        }
      },
      {
        "technology_id": "bev_commercial_vehicles",
        "category": "energy_transition",
        "name": {
          "zh": "商用電池電動車",
          "en": "Battery Electric Commercial Vehicles",
          "ja": "商用バッテリー電気自動車"
        },
        "shortName": {
          "zh": "商用 BEV",
          "en": "Commercial BEV",
          "ja": "商用 BEV"
        },
        "glossaryTerms": [
          "bev",
          "tco",
          "soh"
        ],
        "maturity_score": 76,
        "business_value_score": 82,
        "implementation_cost": 70,
        "regulation_risk": 50,
        "dealer_training_difficulty": 74,
        "service_readiness": 64,
        "recommended_status": "poc_planning",
        "risk_level": "medium",
        "suitable_scenarios": {
          "zh": [
            "回場充電的都市配送",
            "固定里程與可預測載重",
            "有 ESG 採購壓力的企業客戶"
          ],
          "en": [
            "Urban delivery with depot charging",
            "Predictable mileage and payload",
            "Enterprise customers facing ESG procurement pressure"
          ],
          "ja": [
            "拠点充電が可能な都市配送",
            "走行距離と積載が予測しやすい運用",
            "ESG 調達圧力がある企業顧客"
          ]
        },
        "planning_notes": {
          "zh": "適合以路線盤點、TCO、電池健康度與充電條件做 PoC，尚不宜用單一案例推論所有車隊適用。",
          "en": "Use route mapping, TCO, battery health, and charging conditions for PoC design. One successful case should not be generalized to every fleet.",
          "ja": "ルート整理、TCO、電池状態、充電条件を使って PoC を設計します。一つの成功例をすべての車隊へ一般化しないことが大切です。"
        }
      },
      {
        "technology_id": "hydrogen_trucks",
        "category": "energy_transition",
        "name": {
          "zh": "氫燃料電池卡車",
          "en": "Hydrogen Fuel Cell Trucks",
          "ja": "水素燃料電池トラック"
        },
        "shortName": {
          "zh": "氫能卡車",
          "en": "Hydrogen Trucks",
          "ja": "水素トラック"
        },
        "glossaryTerms": [
          "fcev",
          "tco"
        ],
        "maturity_score": 46,
        "business_value_score": 62,
        "implementation_cost": 88,
        "regulation_risk": 72,
        "dealer_training_difficulty": 70,
        "service_readiness": 36,
        "recommended_status": "long_term_tracking",
        "risk_level": "high",
        "suitable_scenarios": {
          "zh": [
            "長途或高載重情境觀測",
            "有氫能供應證據的示範走廊",
            "政策或大型客戶推動的中長期方案"
          ],
          "en": [
            "Long-haul or high-payload scenario tracking",
            "Demonstration corridors with hydrogen supply evidence",
            "Mid- to long-term programs driven by policy or major customers"
          ],
          "ja": [
            "長距離または高積載用途の観測",
            "水素供給の根拠がある実証回廊",
            "政策または大口顧客により進む中長期案"
          ]
        },
        "planning_notes": {
          "zh": "應維持長期追蹤，聚焦基礎建設、燃料成本、維修安全與車型供應，避免提前包裝成近期主力方案。",
          "en": "Keep it in long-term tracking and focus on infrastructure, fuel cost, service safety, and vehicle availability before near-term positioning.",
          "ja": "長期追跡に置き、インフラ、燃料コスト、整備安全、車両供給を確認してから短期の主力案として扱うべきです。"
        }
      },
      {
        "technology_id": "v2g_depot_energy",
        "category": "energy_services",
        "name": {
          "zh": "回場車隊 V2G",
          "en": "Depot Fleet Vehicle-to-Grid",
          "ja": "拠点帰着型車隊の Vehicle-to-Grid"
        },
        "shortName": {
          "zh": "V2G 回場",
          "en": "Depot V2G",
          "ja": "拠点 V2G"
        },
        "glossaryTerms": [
          "v2g",
          "bev",
          "soh"
        ],
        "maturity_score": 42,
        "business_value_score": 58,
        "implementation_cost": 78,
        "regulation_risk": 76,
        "dealer_training_difficulty": 68,
        "service_readiness": 38,
        "recommended_status": "long_term_tracking",
        "risk_level": "high",
        "suitable_scenarios": {
          "zh": [
            "大型回場車隊",
            "電價與需量管理壓力明確的場站",
            "電網規則與雙向充電設備成熟後的能源服務"
          ],
          "en": [
            "Large depot-return fleets",
            "Sites with clear power-demand management pressure",
            "Energy services after grid rules and bidirectional charging mature"
          ],
          "ja": [
            "大規模な拠点帰着型車隊",
            "電力需要管理の圧力が明確な拠点",
            "系統ルールと双方向充電が成熟した後のエネルギーサービス"
          ]
        },
        "planning_notes": {
          "zh": "先追蹤雙向充電、保固與收益模型，不宜把未驗證收益作為近期銷售或服務承諾。",
          "en": "Track bidirectional charging, warranty, and revenue models first. Unvalidated revenue should not become a near-term sales or service promise.",
          "ja": "双方向充電、保証、収益モデルを先に追跡します。未検証の収益を短期の販売・サービス約束にしないことが重要です。"
        }
      },
      {
        "technology_id": "level4_logistics_automation",
        "category": "automation",
        "name": {
          "zh": "Level 4 物流自動化",
          "en": "Level 4 Logistics Automation",
          "ja": "Level 4 物流自動化"
        },
        "shortName": {
          "zh": "L4 物流",
          "en": "L4 Logistics",
          "ja": "L4 物流"
        },
        "glossaryTerms": [
          "l4",
          "odd",
          "poc"
        ],
        "maturity_score": 38,
        "business_value_score": 64,
        "implementation_cost": 86,
        "regulation_risk": 82,
        "dealer_training_difficulty": 78,
        "service_readiness": 32,
        "recommended_status": "deferred_observation",
        "risk_level": "high",
        "suitable_scenarios": {
          "zh": [
            "封閉場域",
            "固定低速物流流程",
            "安全邊界可明確定義的 PoC"
          ],
          "en": [
            "Closed sites",
            "Fixed low-speed logistics processes",
            "PoCs with clearly defined safety boundaries"
          ],
          "ja": [
            "閉鎖エリア",
            "固定された低速物流プロセス",
            "安全境界を明確に定義できる PoC"
          ]
        },
        "planning_notes": {
          "zh": "適合觀測與小範圍概念驗證，不應從展示案例跳到一般道路或量產部署結論。",
          "en": "Suitable for observation and narrow concept validation. A demo case should not be translated into general-road or production deployment claims.",
          "ja": "観測と限定的な概念検証に適しています。展示事例から一般道路や量産展開の結論へ飛躍しないことが必要です。"
        }
      },
      {
        "technology_id": "adas_safety_package",
        "category": "safety",
        "name": {
          "zh": "ADAS 安全教育套件",
          "en": "ADAS Safety Education Package",
          "ja": "ADAS 安全教育パッケージ"
        },
        "shortName": {
          "zh": "ADAS 教育",
          "en": "ADAS Education",
          "ja": "ADAS 教育"
        },
        "glossaryTerms": [
          "adas",
          "odd",
          "dealer"
        ],
        "maturity_score": 86,
        "business_value_score": 80,
        "implementation_cost": 46,
        "regulation_risk": 38,
        "dealer_training_difficulty": 76,
        "service_readiness": 82,
        "recommended_status": "near_term_education",
        "risk_level": "low",
        "suitable_scenarios": {
          "zh": [
            "新車交車教育",
            "經銷與售後訓練",
            "安全配備說明與客戶誤解管理"
          ],
          "en": [
            "New-vehicle delivery education",
            "Dealer and after-sales training",
            "Safety-feature explanation and customer expectation management"
          ],
          "ja": [
            "新車納車時の教育",
            "販売店とアフターサービスの研修",
            "安全機能説明と顧客期待値の管理"
          ]
        },
        "planning_notes": {
          "zh": "可立即進入教育與內容標準化，但須持續說明輔助功能邊界與駕駛責任。",
          "en": "Ready for education and content standardization, while continuing to explain assistance limits and driver responsibility.",
          "ja": "教育と内容標準化にすぐ進めますが、支援機能の限界と運転者責任を説明し続ける必要があります。"
        }
      },
      {
        "technology_id": "connected_fleet_services",
        "category": "data_services",
        "name": {
          "zh": "車聯網車隊服務",
          "en": "Connected Fleet Services",
          "ja": "コネクテッド車隊サービス"
        },
        "shortName": {
          "zh": "車聯網服務",
          "en": "Connected Fleet",
          "ja": "コネクテッド車隊"
        },
        "glossaryTerms": [
          "fms",
          "ota",
          "ai-governance"
        ],
        "maturity_score": 78,
        "business_value_score": 82,
        "implementation_cost": 60,
        "regulation_risk": 52,
        "dealer_training_difficulty": 70,
        "service_readiness": 74,
        "recommended_status": "near_term_education",
        "risk_level": "medium",
        "suitable_scenarios": {
          "zh": [
            "需要遠端診斷的車隊",
            "重視保養提醒與稼動率的客戶",
            "可接受資料授權流程的營運情境"
          ],
          "en": [
            "Fleets needing remote diagnostics",
            "Customers focused on maintenance reminders and uptime",
            "Operations that can support data-consent workflows"
          ],
          "ja": [
            "遠隔診断が必要な車隊",
            "整備通知と稼働率を重視する顧客",
            "データ同意の流れを扱える運用"
          ]
        },
        "planning_notes": {
          "zh": "適合從服務包與資料授權教育開始，先把資料使用、售後流程與客戶價值說清楚。",
          "en": "Start from service packages and data-consent education, clarifying data use, after-sales workflow, and customer value.",
          "ja": "サービスパッケージとデータ同意教育から始め、データ利用、アフターサービスの流れ、顧客価値を明確にします。"
        }
      },
      {
        "technology_id": "charging_infrastructure",
        "category": "infrastructure",
        "name": {
          "zh": "商用車充電基礎建設",
          "en": "Commercial Vehicle Charging Infrastructure",
          "ja": "商用車向け充電インフラ"
        },
        "shortName": {
          "zh": "充電建設",
          "en": "Charging Infrastructure",
          "ja": "充電インフラ"
        },
        "glossaryTerms": [
          "bev",
          "tco",
          "dealer"
        ],
        "maturity_score": 70,
        "business_value_score": 86,
        "implementation_cost": 82,
        "regulation_risk": 58,
        "dealer_training_difficulty": 72,
        "service_readiness": 58,
        "recommended_status": "poc_planning",
        "risk_level": "medium",
        "suitable_scenarios": {
          "zh": [
            "回場型 BEV 導入",
            "有停車與電力容量可盤點的場站",
            "需要整合車輛、充電與維修安全的客戶"
          ],
          "en": [
            "Depot-based BEV rollout",
            "Sites where parking and power capacity can be assessed",
            "Customers needing integrated vehicle, charging, and service-safety planning"
          ],
          "ja": [
            "拠点型 BEV 導入",
            "駐車と電力容量を確認できる拠点",
            "車両、充電、整備安全を統合して考える顧客"
          ]
        },
        "planning_notes": {
          "zh": "是 BEV 企劃的基礎能力，適合納入 PoC 前問診與場站檢核，而不是只當設備採購題。",
          "en": "A foundation for BEV planning. Treat it as pre-PoC discovery and site checking, not only equipment procurement.",
          "ja": "BEV 企画の基礎能力です。機器購入だけでなく、PoC 前の確認と拠点チェックとして扱います。"
        }
      },
      {
        "technology_id": "carbon_tracking",
        "category": "policy_esg",
        "name": {
          "zh": "車隊碳追蹤",
          "en": "Fleet Carbon Tracking",
          "ja": "車隊カーボントラッキング"
        },
        "shortName": {
          "zh": "碳追蹤",
          "en": "Carbon Tracking",
          "ja": "炭素追跡"
        },
        "glossaryTerms": [
          "carbon-accounting",
          "esg",
          "kpi"
        ],
        "maturity_score": 66,
        "business_value_score": 72,
        "implementation_cost": 54,
        "regulation_risk": 60,
        "dealer_training_difficulty": 58,
        "service_readiness": 64,
        "recommended_status": "near_term_education",
        "risk_level": "medium",
        "suitable_scenarios": {
          "zh": [
            "大型企業客戶",
            "需要 ESG 採購回覆的車隊",
            "有油耗、里程或能源資料可整理的營運場景"
          ],
          "en": [
            "Large enterprise customers",
            "Fleets that need ESG procurement responses",
            "Operations with fuel, mileage, or energy data that can be organized"
          ],
          "ja": [
            "大企業顧客",
            "ESG 調達への回答が必要な車隊",
            "燃料、走行距離、エネルギーデータを整理できる運用"
          ]
        },
        "planning_notes": {
          "zh": "可先做教育與資料欄位設計，但排放係數、邊界與計算方法必須標示來源與假設。",
          "en": "Useful for education and data-field design now, but emission factors, boundaries, and calculation methods must disclose sources and assumptions.",
          "ja": "教育とデータ項目設計から始められますが、排出係数、境界、計算方法は出典と仮定を明示する必要があります。"
        }
      }
    ]
  },
  "data/trend_radar.json": {
    "meta": {
      "schemaVersion": "1.0.0",
      "dataStatus": "demo_assumptions",
      "moduleId": "trend-radar",
      "sourceBasis": "Portfolio proposal strategy narrative, translated into illustrative planning assumptions.",
      "scoring_model": {
        "market_relevance": 0.2,
        "technology_readiness": 0.2,
        "cost_feasibility": 0.15,
        "regulation_readiness": 0.15,
        "customer_pain_fit": 0.15,
        "dealer_education_value": 0.1,
        "strategic_differentiation": 0.05
      },
      "source_limitations": {
        "zh": "本雷達僅用於作品集示範。國際趨勢訊號必須加入台灣法規、基礎建設、客戶營運型態、能源價格與服務能力驗證後，才能作為正式企劃依據。",
        "en": "This radar is for portfolio demonstration only. Global signals need Taiwan-specific validation across regulation, infrastructure, customer operations, energy pricing, and service readiness before they can support formal planning.",
        "ja": "このレーダーはポートフォリオ用のデモです。国際的なシグナルは、台湾の規制、インフラ、顧客の運用、エネルギー価格、サービス体制で検証してから正式な企画判断に使う必要があります。"
      }
    },
    "trends": [
      {
        "trend_id": "bev_urban_delivery",
        "category": "energy_transition",
        "name": {
          "zh": "市區配送電池電動車",
          "en": "Urban Delivery Battery Electric Vehicles",
          "ja": "都市配送向けバッテリー電気自動車"
        },
        "shortName": {
          "zh": "市區 BEV",
          "en": "Urban BEV",
          "ja": "都市 BEV"
        },
        "glossaryTerms": [
          "bev",
          "tco"
        ],
        "market_relevance": 84,
        "technology_readiness": 78,
        "cost_feasibility": 66,
        "regulation_readiness": 70,
        "customer_pain_fit": 82,
        "dealer_education_value": 88,
        "strategic_differentiation": 72,
        "priority_score": 78,
        "strategy_status": "near_term_poc",
        "time_horizon": {
          "startYear": 2026,
          "endYear": 2030
        },
        "risk_level": "medium",
        "data_confidence": 62,
        "summary": {
          "zh": "固定路線、回場充電與都市低噪音需求，使 BEV 適合先用小範圍路線驗證 TCO、充電排程與服務教育。",
          "en": "Fixed routes, depot charging, and lower-noise urban operations make BEVs suitable for limited route trials that test TCO, charging schedules, and service education.",
          "ja": "固定ルート、拠点充電、都市部の低騒音ニーズがあるため、BEV は TCO、充電スケジュール、サービス教育を小規模に検証しやすい領域です。"
        },
        "suggested_next_actions": {
          "zh": [
            "選定回場型配送客戶做路線盤點",
            "建立充電時段與停車空間假設",
            "準備 TCO 與電池健康度教育素材"
          ],
          "en": [
            "Map depot-return delivery use cases",
            "Model charging windows and parking constraints",
            "Prepare TCO and battery-health education material"
          ],
          "ja": [
            "拠点に戻る配送ユースケースを整理する",
            "充電時間帯と駐車スペースの制約を仮置きする",
            "TCO と電池劣化に関する教育資料を準備する"
          ]
        }
      },
      {
        "trend_id": "charging_infrastructure",
        "category": "infrastructure",
        "name": {
          "zh": "商用車充電基礎建設",
          "en": "Commercial Vehicle Charging Infrastructure",
          "ja": "商用車向け充電インフラ"
        },
        "shortName": {
          "zh": "充電建設",
          "en": "Charging",
          "ja": "充電"
        },
        "glossaryTerms": [
          "bev",
          "tco"
        ],
        "market_relevance": 88,
        "technology_readiness": 72,
        "cost_feasibility": 58,
        "regulation_readiness": 68,
        "customer_pain_fit": 90,
        "dealer_education_value": 84,
        "strategic_differentiation": 70,
        "priority_score": 76,
        "strategy_status": "foundation_enabler",
        "time_horizon": {
          "startYear": 2026,
          "endYear": 2032
        },
        "risk_level": "medium",
        "data_confidence": 58,
        "summary": {
          "zh": "充電不是單一設備採購，而是車輛導入、停車動線、電力容量、維修安全與客戶教育共同構成的基礎能力。",
          "en": "Charging is not just equipment procurement. It connects vehicle rollout, parking flow, power capacity, service safety, and customer education.",
          "ja": "充電は機器購入だけではありません。車両導入、駐車動線、電力容量、整備安全、顧客教育をつなぐ基礎能力です。"
        },
        "suggested_next_actions": {
          "zh": [
            "把充電條件納入 BEV 銷售前問診",
            "建立場站電力與停車條件檢核表",
            "區分客戶自建、租賃與合作場站情境"
          ],
          "en": [
            "Add charging checks to BEV pre-sales discovery",
            "Create depot power and parking checklists",
            "Separate owned, leased, and partner-site scenarios"
          ],
          "ja": [
            "BEV 提案前の確認に充電条件を入れる",
            "拠点の電力と駐車条件のチェックリストを作る",
            "自社、賃借、提携拠点のシナリオを分ける"
          ]
        }
      },
      {
        "trend_id": "adas_safety_education",
        "category": "safety",
        "name": {
          "zh": "進階駕駛輔助系統教育",
          "en": "Advanced Driver Assistance Systems Education",
          "ja": "先進運転支援システム教育"
        },
        "shortName": {
          "zh": "ADAS 教育",
          "en": "ADAS Education",
          "ja": "ADAS 教育"
        },
        "glossaryTerms": [
          "adas",
          "odd"
        ],
        "market_relevance": 82,
        "technology_readiness": 86,
        "cost_feasibility": 74,
        "regulation_readiness": 78,
        "customer_pain_fit": 80,
        "dealer_education_value": 92,
        "strategic_differentiation": 66,
        "priority_score": 81,
        "strategy_status": "education_now",
        "time_horizon": {
          "startYear": 2026,
          "endYear": 2028
        },
        "risk_level": "low",
        "data_confidence": 70,
        "summary": {
          "zh": "ADAS 的價值不只在配備表，而在能否清楚說明功能邊界、駕駛責任、適用情境與經銷端教育流程。",
          "en": "The value of ADAS is not only the feature list. It depends on clear explanation of system limits, driver responsibility, operating conditions, and dealer education flow.",
          "ja": "ADAS の価値は装備一覧だけではありません。機能の限界、運転者の責任、利用条件、販売店教育の流れを明確に説明できることが重要です。"
        },
        "suggested_next_actions": {
          "zh": [
            "建立功能邊界與駕駛責任話術",
            "把 ADAS 納入交車與售後教育",
            "避免把輔助功能描述成自動駕駛"
          ],
          "en": [
            "Create system-limit and driver-responsibility scripts",
            "Add ADAS to delivery and after-sales education",
            "Avoid describing assistance features as automated driving"
          ],
          "ja": [
            "機能限界と運転者責任の説明文を整える",
            "納車時とアフターサービス教育に ADAS を入れる",
            "支援機能を自動運転として表現しない"
          ]
        }
      },
      {
        "trend_id": "connected_fleet_fms",
        "category": "data_services",
        "name": {
          "zh": "車隊管理系統與車聯網服務",
          "en": "Fleet Management Systems and Connected Services",
          "ja": "車隊管理システムとコネクテッドサービス"
        },
        "shortName": {
          "zh": "FMS 車聯網",
          "en": "FMS Services",
          "ja": "FMS サービス"
        },
        "glossaryTerms": [
          "fms",
          "ota"
        ],
        "market_relevance": 80,
        "technology_readiness": 82,
        "cost_feasibility": 72,
        "regulation_readiness": 74,
        "customer_pain_fit": 84,
        "dealer_education_value": 86,
        "strategic_differentiation": 76,
        "priority_score": 79,
        "strategy_status": "service_package",
        "time_horizon": {
          "startYear": 2026,
          "endYear": 2031
        },
        "risk_level": "medium",
        "data_confidence": 66,
        "summary": {
          "zh": "FMS 可把車輛銷售延伸到稼動率、保養排程、路線效率與售後服務，但資料治理與客戶授權要先設計清楚。",
          "en": "FMS can extend vehicle sales into uptime, maintenance planning, route efficiency, and after-sales service, but data governance and customer consent need to be designed early.",
          "ja": "FMS は車両販売を稼働率、整備計画、ルート効率、アフターサービスへ広げますが、データガバナンスと顧客同意を先に設計する必要があります。"
        },
        "suggested_next_actions": {
          "zh": [
            "定義車隊儀表板的最小可用 KPI",
            "設計客戶資料授權與告知流程",
            "把維修提醒與服務據點流程串接"
          ],
          "en": [
            "Define the minimum useful fleet dashboard KPIs",
            "Design customer consent and data notices",
            "Connect maintenance alerts with service-site workflows"
          ],
          "ja": [
            "最小限有用な車隊ダッシュボード KPI を定義する",
            "顧客同意とデータ通知の流れを設計する",
            "整備アラートとサービス拠点の業務をつなぐ"
          ]
        }
      },
      {
        "trend_id": "hybrid_transition",
        "category": "energy_transition",
        "name": {
          "zh": "油電混合轉換路徑",
          "en": "Hybrid Transition Pathway",
          "ja": "ハイブリッド移行パス"
        },
        "shortName": {
          "zh": "Hybrid 過渡",
          "en": "Hybrid Path",
          "ja": "Hybrid 移行"
        },
        "glossaryTerms": [
          "hev",
          "tco"
        ],
        "market_relevance": 76,
        "technology_readiness": 84,
        "cost_feasibility": 78,
        "regulation_readiness": 72,
        "customer_pain_fit": 74,
        "dealer_education_value": 82,
        "strategic_differentiation": 55,
        "priority_score": 77,
        "strategy_status": "transition_support",
        "time_horizon": {
          "startYear": 2026,
          "endYear": 2033
        },
        "risk_level": "low",
        "data_confidence": 68,
        "summary": {
          "zh": "混合動力可作為部分營運情境的過渡選項，但不應被包裝成所有客戶的單一路徑。",
          "en": "Hybrid powertrains can support selected transition cases, but they should not be framed as the single path for every customer.",
          "ja": "ハイブリッドは一部の移行ケースを支えますが、すべての顧客に共通する唯一の道として扱うべきではありません。"
        },
        "suggested_next_actions": {
          "zh": [
            "用路線型態區分適用客戶",
            "比較油耗、維修與殘值假設",
            "避免把過渡方案解讀為最終答案"
          ],
          "en": [
            "Segment fit by duty cycle and route type",
            "Compare fuel, maintenance, and residual-value assumptions",
            "Avoid treating the transition option as the final answer"
          ],
          "ja": [
            "稼働パターンとルート別に適合を分ける",
            "燃費、整備、残価の仮定を比較する",
            "移行案を最終解と見なさない"
          ]
        }
      },
      {
        "trend_id": "ai_fleet_management",
        "category": "data_services",
        "name": {
          "zh": "AI 輔助車隊管理",
          "en": "AI-Assisted Fleet Management",
          "ja": "AI 支援型車隊管理"
        },
        "shortName": {
          "zh": "AI 車隊",
          "en": "AI Fleet",
          "ja": "AI 車隊"
        },
        "glossaryTerms": [
          "ai-governance",
          "fms",
          "kpi"
        ],
        "market_relevance": 72,
        "technology_readiness": 64,
        "cost_feasibility": 62,
        "regulation_readiness": 54,
        "customer_pain_fit": 78,
        "dealer_education_value": 76,
        "strategic_differentiation": 82,
        "priority_score": 68,
        "strategy_status": "guarded_experiment",
        "time_horizon": {
          "startYear": 2027,
          "endYear": 2032
        },
        "risk_level": "medium",
        "data_confidence": 52,
        "summary": {
          "zh": "AI 可協助整理異常、保養與路線訊號，但在資料品質、偏誤、責任歸屬與人審流程未明確前，應保持輔助定位。",
          "en": "AI can help organize anomaly, maintenance, and route signals, but it should remain assistive until data quality, bias, accountability, and human review are clear.",
          "ja": "AI は異常、整備、ルートのシグナル整理を助けますが、データ品質、偏り、責任、人による確認が明確になるまでは支援的な位置づけに留めるべきです。"
        },
        "suggested_next_actions": {
          "zh": [
            "先建立人工審核與覆核紀錄",
            "限制 AI 建議的使用場景",
            "避免把模型輸出寫成已驗證決策"
          ],
          "en": [
            "Set human review and audit records first",
            "Limit where AI recommendations can be used",
            "Avoid presenting model output as verified decisions"
          ],
          "ja": [
            "人による確認と記録を先に設計する",
            "AI 推奨を使う場面を限定する",
            "モデル出力を検証済み判断として表現しない"
          ]
        }
      },
      {
        "trend_id": "esg_carbon_policy",
        "category": "policy_esg",
        "name": {
          "zh": "ESG 與碳政策訊號",
          "en": "ESG and Carbon Policy Signals",
          "ja": "ESG と炭素政策シグナル"
        },
        "shortName": {
          "zh": "ESG 政策",
          "en": "ESG Policy",
          "ja": "ESG 政策"
        },
        "glossaryTerms": [
          "esg",
          "kpi"
        ],
        "market_relevance": 78,
        "technology_readiness": 70,
        "cost_feasibility": 68,
        "regulation_readiness": 66,
        "customer_pain_fit": 76,
        "dealer_education_value": 74,
        "strategic_differentiation": 68,
        "priority_score": 72,
        "strategy_status": "monitor_and_frame",
        "time_horizon": {
          "startYear": 2026,
          "endYear": 2035
        },
        "risk_level": "medium",
        "data_confidence": 56,
        "summary": {
          "zh": "ESG 與碳政策可影響大型客戶採購與車隊汰換節奏，但公開說法需清楚區分政策訊號、估算假設與已驗證數據。",
          "en": "ESG and carbon policy can influence major customer procurement and replacement cycles, but public wording must separate policy signals, estimates, and verified data.",
          "ja": "ESG と炭素政策は大口顧客の調達や車両更新に影響しますが、公的な表現では政策シグナル、推計、検証済みデータを分ける必要があります。"
        },
        "suggested_next_actions": {
          "zh": [
            "建立政策訊號追蹤欄位",
            "把排放估算標示為假設",
            "準備客戶 ESG 問題的保守回答"
          ],
          "en": [
            "Create fields for tracking policy signals",
            "Label emissions estimates as assumptions",
            "Prepare conservative answers for customer ESG questions"
          ],
          "ja": [
            "政策シグナルを追跡する項目を作る",
            "排出量推計を仮定として明示する",
            "顧客の ESG 質問に対する慎重な回答を準備する"
          ]
        }
      },
      {
        "trend_id": "logistics_automation",
        "category": "automation",
        "name": {
          "zh": "物流自動化與封閉場域應用",
          "en": "Logistics Automation and Closed-Site Applications",
          "ja": "物流自動化と閉鎖エリアでの活用"
        },
        "shortName": {
          "zh": "物流自動化",
          "en": "Automation",
          "ja": "物流自動化"
        },
        "glossaryTerms": [
          "odd",
          "poc"
        ],
        "market_relevance": 65,
        "technology_readiness": 58,
        "cost_feasibility": 50,
        "regulation_readiness": 48,
        "customer_pain_fit": 72,
        "dealer_education_value": 70,
        "strategic_differentiation": 78,
        "priority_score": 61,
        "strategy_status": "controlled_poc",
        "time_horizon": {
          "startYear": 2028,
          "endYear": 2034
        },
        "risk_level": "high",
        "data_confidence": 45,
        "summary": {
          "zh": "物流自動化較適合先在封閉場域或固定流程討論，公開敘事需避免把概念展示直接推論到一般道路部署。",
          "en": "Logistics automation is better discussed first in closed sites or fixed processes. Public narratives should not jump from concept demos to general road deployment.",
          "ja": "物流自動化はまず閉鎖エリアや固定プロセスで検討するのが現実的です。コンセプト展示から一般道路展開へ直接飛躍しない表現が必要です。"
        },
        "suggested_next_actions": {
          "zh": [
            "以 ODD 定義可控場景",
            "用 PoC 驗證流程而非宣稱量產",
            "記錄人工接管與安全邊界"
          ],
          "en": [
            "Define controllable contexts through ODD",
            "Use PoCs to test processes rather than claim production readiness",
            "Record human takeover and safety boundaries"
          ],
          "ja": [
            "ODD で制御可能な場面を定義する",
            "量産準備ではなくプロセス検証として PoC を使う",
            "人の介入と安全境界を記録する"
          ]
        }
      },
      {
        "trend_id": "v2g_depot_fleet",
        "category": "energy_services",
        "name": {
          "zh": "回場車隊 V2G 能源服務",
          "en": "Depot Fleet Vehicle-to-Grid Energy Services",
          "ja": "拠点帰着型車隊の Vehicle-to-Grid エネルギーサービス"
        },
        "shortName": {
          "zh": "V2G 車隊",
          "en": "V2G Fleet",
          "ja": "V2G 車隊"
        },
        "glossaryTerms": [
          "v2g",
          "bev"
        ],
        "market_relevance": 62,
        "technology_readiness": 55,
        "cost_feasibility": 42,
        "regulation_readiness": 38,
        "customer_pain_fit": 60,
        "dealer_education_value": 74,
        "strategic_differentiation": 80,
        "priority_score": 56,
        "strategy_status": "long_term_watch",
        "time_horizon": {
          "startYear": 2029,
          "endYear": 2035
        },
        "risk_level": "high",
        "data_confidence": 42,
        "summary": {
          "zh": "V2G 對回場車隊有想像空間，但需要雙向充電設備、電網規則、電池保固與收益模型同步成熟。",
          "en": "V2G has potential for depot fleets, but bidirectional charging, grid rules, battery warranty, and revenue models need to mature together.",
          "ja": "V2G は拠点帰着型車隊に可能性がありますが、双方向充電、電力系統ルール、電池保証、収益モデルが同時に成熟する必要があります。"
        },
        "suggested_next_actions": {
          "zh": [
            "維持長期觀測與案例追蹤",
            "先釐清保固與電池健康度影響",
            "不以未驗證收益模型作為近期銷售承諾"
          ],
          "en": [
            "Keep long-term monitoring and case tracking",
            "Clarify warranty and battery-health effects first",
            "Do not use unvalidated revenue models as near-term sales promises"
          ],
          "ja": [
            "長期観測と事例追跡を続ける",
            "保証と電池健康度への影響を先に整理する",
            "未検証の収益モデルを短期の販売約束にしない"
          ]
        }
      },
      {
        "trend_id": "fcev_long_haul",
        "category": "energy_transition",
        "name": {
          "zh": "長途與高載重燃料電池車",
          "en": "Long-Haul and High-Payload Fuel Cell Electric Vehicles",
          "ja": "長距離・高積載向け燃料電池電気自動車"
        },
        "shortName": {
          "zh": "長途 FCEV",
          "en": "Long-Haul FCEV",
          "ja": "長距離 FCEV"
        },
        "glossaryTerms": [
          "fcev",
          "tco"
        ],
        "market_relevance": 58,
        "technology_readiness": 54,
        "cost_feasibility": 38,
        "regulation_readiness": 42,
        "customer_pain_fit": 64,
        "dealer_education_value": 68,
        "strategic_differentiation": 82,
        "priority_score": 55,
        "strategy_status": "scenario_watch",
        "time_horizon": {
          "startYear": 2030,
          "endYear": 2035
        },
        "risk_level": "high",
        "data_confidence": 40,
        "summary": {
          "zh": "FCEV 對長途與高載重具策略觀測價值，但在氫能基礎建設與成本未明朗前，較適合作為情境追蹤。",
          "en": "FCEVs have strategic monitoring value for long-haul and high-payload use, but until hydrogen infrastructure and cost are clearer, they fit better as scenario tracking.",
          "ja": "FCEV は長距離・高積載用途で戦略的に観測する価値がありますが、水素インフラとコストが明確になるまではシナリオ追跡が適しています。"
        },
        "suggested_next_actions": {
          "zh": [
            "追蹤氫能場站與示範案例",
            "保持長途與高載重情境資料",
            "避免把遠期選項提前寫成近期承諾"
          ],
          "en": [
            "Track hydrogen sites and demonstration cases",
            "Keep long-haul and high-payload scenario data",
            "Avoid turning a future option into a near-term promise"
          ],
          "ja": [
            "水素拠点と実証事例を追跡する",
            "長距離・高積載シナリオのデータを保つ",
            "将来選択肢を短期の約束として書かない"
          ]
        }
      },
      {
        "trend_id": "vehicle_as_a_service",
        "category": "business_model",
        "name": {
          "zh": "商用車服務化模式",
          "en": "Commercial-Vehicle-as-a-Service Models",
          "ja": "商用車サービス化モデル"
        },
        "shortName": {
          "zh": "CV-as-a-Service",
          "en": "CV-as-a-Service",
          "ja": "CV-as-a-Service"
        },
        "glossaryTerms": [
          "fms",
          "tco",
          "kpi"
        ],
        "market_relevance": 70,
        "technology_readiness": 66,
        "cost_feasibility": 60,
        "regulation_readiness": 58,
        "customer_pain_fit": 78,
        "dealer_education_value": 80,
        "strategic_differentiation": 84,
        "priority_score": 69,
        "strategy_status": "business_design",
        "time_horizon": {
          "startYear": 2027,
          "endYear": 2035
        },
        "risk_level": "medium",
        "data_confidence": 50,
        "summary": {
          "zh": "服務化模式可把車輛、維修、資料與金融安排整合成營運方案，但需先確認合約、風險分攤與服務能力。",
          "en": "Vehicle-as-a-service models can combine vehicles, maintenance, data, and financing into operating solutions, but contracts, risk sharing, and service capability must be clear first.",
          "ja": "商用車のサービス化は、車両、整備、データ、金融を運用ソリューションとして組み合わせますが、契約、リスク分担、サービス能力を先に明確にする必要があります。"
        },
        "suggested_next_actions": {
          "zh": [
            "分離租賃、維修、資料與保證項目",
            "用 KPI 定義服務成果",
            "先做小型客戶假設而非全面推出"
          ],
          "en": [
            "Separate leasing, maintenance, data, and guarantee items",
            "Use KPIs to define service outcomes",
            "Start with small customer assumptions rather than broad rollout"
          ],
          "ja": [
            "リース、整備、データ、保証項目を分ける",
            "KPI でサービス成果を定義する",
            "全面展開ではなく小規模な顧客仮説から始める"
          ]
        }
      }
    ]
  }
};

  const nativeFetch = window.fetch ? window.fetch.bind(window) : null;

  function normalize(input) {
    const value = typeof input === "string" ? input : input && input.url ? input.url : "";
    const withoutQuery = value.split("?")[0].split("#")[0];
    return withoutQuery.replace(/^\.\//, "").replace(/^\//, "");
  }

  function hasCachedJson(input) {
    return Object.prototype.hasOwnProperty.call(cache, normalize(input));
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function jsonResponse(value) {
    return new Response(JSON.stringify(value), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }

  async function fetchJson(input) {
    const key = normalize(input);
    const preferCache = window.location && window.location.protocol === "file:";
    if (preferCache && hasCachedJson(input)) return clone(cache[key]);
    if (nativeFetch) {
      try {
        const response = await nativeFetch(input);
        if (response.ok) return response.json();
      } catch (error) {
        if (!hasCachedJson(input)) throw error;
      }
    }
    if (hasCachedJson(input)) return clone(cache[key]);
    throw new Error("Static data not found: " + input);
  }

  if (nativeFetch) {
    window.fetch = async function staticDataFetch(input, init) {
      const method = (init && init.method) || (input && input.method) || "GET";
      const isGet = String(method).toUpperCase() === "GET";
      const preferCache = window.location && window.location.protocol === "file:";
      if (isGet && preferCache && hasCachedJson(input)) return jsonResponse(cache[normalize(input)]);
      try {
        return await nativeFetch(input, init);
      } catch (error) {
        if (isGet && hasCachedJson(input)) return jsonResponse(cache[normalize(input)]);
        throw error;
      }
    };
  }

  window.ProjectStaticData = {
    has: hasCachedJson,
    getJson(input) {
      const key = normalize(input);
      return hasCachedJson(input) ? clone(cache[key]) : null;
    },
    fetchJson
  };
})();

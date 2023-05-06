import type { ReactElement } from "react"

import { EmotionCache } from "@emotion/react"
import { DehydratedState, QueryClient } from "@tanstack/react-query"
import type { AxiosError as AxiosErrorExport } from "axios"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import { LinkProps } from "next/link"


declare global {
  // extend global window object
  interface Window {
    ethereum?:
      | ethers.providers.ExternalProvider
      | ethers.providers.JsonRpcFetchFunc
    ccfound?: {
      isNativeApp?: boolean
      expoPushToken?: string
      apiLvl?: string
      reactQueryClient?: QueryClient
      translationsCache?: Record<string, unknown>
    }
    ReactNativeWebView?: {
      postMessage: (arg: string) => void
    }
  }

  type ErrorResponseFormat = {
    message: string
    code: string
    context: Record<string, string>
  }
  type ErrorResponse = { errors: ErrorResponseFormat[] }
  type AxiosError = AxiosErrorExport<ErrorResponse>
  type TAllowedLocales = "en" | "pl" | "es" | "fr" | "zh" | "hi"
  type TAllowedLangTypes = "ui" | "content"
  type TEntity = "Question" | "Article" | "News" | "AfterHours"
  type TArticleType = Lowercase<TEntity>
  type LayoutListType = TArticleType | "all"
  type LayoutListFormat = "list" | "grid"
  type SubscriptionType = "article" | "comment" | "user" | "tag"
  type ContentType = "articles" | "comments"
  type TProductType =
    | "EBOOK"
    | "VIDEO"
    | "NONE"
    | "PAYWALL"
    | "PAID_QUESTION"
    | "PM4A"
  type TTransactionType =
    | "deposit"
    | "withdrawal"
    | "tip"
    | "order"
    | "transaction"
    | "paid_question"
    | "tokend_event"
    | "user_tokend"
    | "burnout"
    | "commission"
    | "referral"

  type FlagContent =
    | "ILLEGAL"
    | "OUT_OF_DATE"
    | "VALUABLE"
    | "PERSONAL"
    | "USER_ILLEGAL"
    | "EVERGREEN"
    | "DELETE_ONLY_ENTITY"
    | "ADULT"
  type FlagAuthor = "ILLEGAL"
  type LawsuitStatus = "MARKED" | "OPEN" | "PENDING" | "RESOLVED" | "REJECTED"
  type TPaymentStatus = "COMPLETED" | "NEW" | "CANCELLED" | "PENDING"

  type SearchedType = "article" | "question" | "user"

  type NewsletterStatus =
    | "new"
    | "pending"
    | "in_progress"
    | "done"
    | "canceled"

  type TPagination = {
    page: number
    totalItems: number
    limit: number
    totalPages: number
  }

  type AvailableFlags = {
    author: FlagAuthor[]
    content: FlagContent[]
  }

  type Flags = {
    author: {
      id: number
      createdAt: string
      type: FlagAuthor
      status: LawsuitStatus
      deletedDate: string | null
    }
    content: {
      creationDate: string
      isValid: boolean
      articleId: number
      type: FlagContent
    }
    users: {
      creationDate: string
      isValid: boolean
      userId: number
      type: FlagAuthor
    }
    articles: {
      creationDate: string
      isValid: boolean
      articleId: number
      type: FlagContent
      status: LawsuitStatus
      deletedDate: string | null
    }
    comment: {
      tagId: number
      creationDate: string
      type: FlagContent
      status: LawsuitStatus
      deletedDate: string | null
    }
    comments: {
      creationDate: string
      type: FlagContent
      status: LawsuitStatus
      deletedDate: string | null
      tagId: number
    }
  }

  type CurrentUserFlags = Pick<Flags, "users" | "articles" | "comments">
  type CurrentVotingFlags = Pick<Flags, "author" | "content" | "comment">

  type PaginationObj = {
    countUnread?: number
    pagination: TPagination
  }

  type BaseResponse<T, Meta = []> = {
    meta: Meta
    data: T
  }

  type Languages = {
    locale: TAllowedLocales
    title: string
  }

  type ResponseWithMeta<T, M = PaginationObj> = BaseResponse<T, M>

  type ResponseWithPagination<T> = BaseResponse<T, PaginationObj>

  type TRole =
    | "ROLE_ADMIN"
    | "ROLE_PUBLISHER_II"
    | "ROLE_WITHDRAWAL"
    | "ROLE_ACCEPT"
    | "ROLE_EDITOR_I"
    | "ROLE_ORDER_ADMIN"
    | "ROLE_RAISING_OBJECTIONS"
    | "ROLE_SETTLE_IV"
    | "ROLE_BLOCKED_II"
    | "ROLE_PERMISSION_GIVER_I"
    | "ROLE_SET_BANER"
    | "ROLE_SETTLE_II"
    | "ROLE_NEWSLETTER_ACCEPT"
    | "ROLE_TRANSLATOR_II"
    | "ROLE_PUBLISHER_I"
    | "ROLE_PRODUCT_PUBLISHER_I"
    | "ROLE_USER"
    | "ROLE_SETTLE_I"
    | "ROLE_TRANSLATOR_I"
    | "ROLE_TESTER"

  type TUserRole = {
    role: TRole
    translation: TRole
    blockedDate: null | string
  }

  type TUserContent = {
    id: number
    article: IQuestionItem
    description: string
    created: string
    label?: string
    author: Pick<IAuthor, "id" | "username" | "avatarUrl">
    articleType?: TEntity
    searchCommentPath?: string[]
  }

  type TUserEth = {
    publicAddress: string
    name: string
  }
  type TWeeklyResponses = { Actual: number; Before: number; Change: number }
  type TUserActivity = {
    name: string
    uv: number
  }

  interface Countable {
    count: number
    weight: number | "average_price"
    points: number
  }

  type Followers = Countable

  type Likes = Countable

  interface Question extends Countable {
    free: Countable
    paid: Countable
    contest: Countable
  }

  interface Answers extends Countable {
    normal: Countable
    long: Countable
    paid: Countable
    winner: Countable
  }

  interface Comments extends Countable {
    blog: Countable
    answers: Countable
    products: Countable
    lessons: Countable
  }

  type Product = Countable

  type SoldProducts = Record<string, Product>

  type BoughtProducts = Record<string, Product>

  interface Tips {
    send: Countable
    received: Countable
  }

  interface Referrals {
    confirmed: Countable
    unconfirmed: Countable
  }

  interface IUserDetails {
    followers: Followers
    likes: Likes
    questions: Question
    blog: Countable
    answers: Answers
    comments: Comments
    translations: Countable
    lawsuits: Countable
    soldProducts: SoldProducts
    boughtProducts: BoughtProducts
    tips: Tips
    referrals: Referrals
  }

  type TUserStats = {
    level: number
    rank: number
    points: number
    subscribers: number
    subscribed: number
    likes: number
    responses: number
    weeklyResponses: TWeeklyResponses
    weeklyLikes: TWeeklyResponses
    activity: TUserActivity[]
    details: IUserDetails
  }

  type TwoFactorType = "GOOGLE" | "SMS" | "EMAIL" | "NONE"

  type TNotificationsSetting = {
    type: string
    emailEnabled: boolean
    notificationEnabled: boolean
  }

  type TSessionSettings = {
    adultContent: boolean
    contentLanguage: TAllowedLocales
    contentView: number
    twoFactorType: TwoFactorType
    notificationSettings: TNotificationsSetting[]
    subscribeNewsletter: boolean
    subscribeReport: boolean
    allowSpamListing: boolean
    referralActive: boolean
    questionsAnswers: string
    questionsSortBy: string
    questionsDaysFrom: number
    newsAnswers: string
    newsSortBy: string
    newsDaysFrom: number
    subscribedOnly: boolean
    subscriptionTags: string[]
    showContentIn: string
  }

  type TAdminUser = {
    id: number
    role: TUserRole[]
    username: string | null
    firstName: string | null
    lastName: string | null
    phrase: string | null
    phone: string | null
    uuid: string | null
    academicDegree: string | null
    email: string
    website: null
    updated: string
    created: string
    referralEmail: string | null
    language: TAllowedLocales
    avatarUrl: string
    level: number
    rank: number
    points: number
    bio: string | null
    settings: TSessionSettings
    subscribedCount: number
    subscriptionsCount: number
    subscriptionTags: ITag[]
    badges: IBadge[]
    currentLawsuits: Flags["author"][]
    verificationLevel: number | null
  }

  type TAdminNewsletter = {
    id: number
    title: string | null
    body: string | null
    template: number | null
    status: NewsletterStatus
    sendAt: string
    createdAt: string
    author: Pick<IAuthor, "id" | "username" | "avatarUrl">
    language: TAllowedLocales
    subscribers: TNewsletterSubscribers
  }

  type TNewsletterSubscribers = {
    sent: number
    all: number
  }

  type TMessageTemplate = {
    id: number
    type: string
  }

  type TSession = {
    id: number
    currentLawsuits: Flags["author"][]
    role: TUserRole[]
    userEthereum: TUserEth | null
    username: string | null
    firstName: string | null
    lastName: string | null
    phrase: string | null
    academicDegree: string | null
    currentLawsuitCount: number
    email: string
    website: string | null
    status: boolean
    updated: string
    created: string
    attributes: null
    refLink: null
    refLinkUserId: null
    language: TAllowedLocales
    avatarUrl: string | null
    level: number
    rank: number
    points: number
    subscribedCount: number
    subscriptionsCount: number
    subscriptionTags: ITag[]
    bio: string | null
    mercureToken: string
    mercureTopic: string
    settings: TSessionSettings
    badges: IBadge[]
    phone?: string | null
    verificationLevel: number | null
    deleted?: boolean
  }

  type TUserL2Balance = {
    coinBalance: number
    voucherBalance: number
    balance: number
    balanceInUSD: number
    incomeValue: number
    outcomeValue: number
  }

  type TUserPublicData = Pick<
    TSession,
    | "id"
    | "role"
    | "username"
    | "firstName"
    | "lastName"
    | "phrase"
    | "academicDegree"
    | "website"
    | "bio"
    | "points"
    | "subscriptionsCount"
    | "subscribedCount"
    | "subscriptionTags"
    | "language"
    | "avatarUrl"
    | "rank"
    | "currentLawsuits"
    | "badges"
    | "verificationLevel"
    | "deleted"
  >

  interface IBadge {
    name: string
    descritpion: string | null
    type: "100_questions" | "early_supporter"
  }

  interface IAuthor {
    id: number
    points: number
    firstName: string | null
    lastName: string | null
    currentLawsuits: Flags["author"][]
    language: TAllowedLocales
    username: string
    website: string | null
    bio: string | null
    avatarUrl: string | null
    badges: IBadge[]
    level: number
    rank: number
    deleted?: boolean
    subscriptionTags?: ITag[]
  }

  interface INewTag {
    label: string
    notTranslate: boolean
  }

  interface ITag {
    uuid: string
    label: string
    articlesCount: number
    language?: TAllowedLocales
    proposed?: boolean
    created?: string
  }

  interface IProposedTag {
    id?: number
    label: string
    articlesCount: number
    proposed?: boolean
    created?: string
  }

  interface ITagWithRelatedTags extends ITag {
    related: ITag[]
  }

  interface IPm4AClarifies {
    message: string
    author: TSession
    id: number
    clarifiedAt: string
    clarify: string
  }

  interface IProduct {
    id: number
    price: number
    decimalPrice: number
    commission: number
    buyer: TSession | null
    clarifies: IPm4AClarifies[]
    description?: string
    pm4aDeadline?: string
    pm4aTimeToAnswer?: number
    paid?: { confirmed: boolean; createdAt: string }
    orderId?: number
    reported?: boolean
  }

  interface ICourseBenefit {
    id: number
    description: string
    position: number
  }

  interface ICourseLessonFile {
    name: string
    url: string | null
    size: number
    length: number | null
    status: "NEW" | "UPLOADING" | "READY" | "ERROR"
  }

  interface ICourseLesson {
    id: string
    content: string | null
    description: string | null
    position: number
    title: string
    pdf: ICourseLessonFile | null
    video: ICourseLessonFile | null
    public: boolean
  }

  interface ICourseChapter {
    id: string
    description: string | null
    position: number
    title: string
    lessons: ICourseLesson[]
  }

  interface ICourseReview {
    id: number
    description: string
    stars: 1 | 2 | 3 | 4 | 5
    createdAt: string
    author: IAuthor
  }

  interface ICourseVersionNote {
    createdAt: string
    note: string
  }

  interface ICourse {
    id: number
    tags: ITag[]
    title: string
    subtitle: string | null
    billing: "INDIVIDUAL" | "COMPANY_WITH_BILL" | "COMPANY_NO_BILL"
    courseChapters: ICourseChapter[]
    level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "NONE"
    type: "VIDEO" | "EBOOK"
    description: string
    price: number
    decimalPrice: number
    language: TAllowedLocales
    benefits: ICourseBenefit[]
    coverUrl: string | null
    author: IAuthor
    status:
      | "DRAFT"
      | "REJECTED"
      | "PUBLISHED"
      | "WAITING_FOR_APPROVAL"
      | "DELETED"
      | "PAID"
    countReview: number
    countReviewAvg: number
    countSales: number
    videoTotalTime?: number
    isBestseller: boolean
    updatedAt: string
    bought: boolean
    version: boolean
    versionNotes: ICourseVersionNote[]
    review?: ICourseReview
  }

  type TUserMentions = {
    avatar: string
    firstName: string | null
    id: number
    lastName: string | null
    username: string
  }
  type TCommentTranslation = {
    author: IAuthor
    description: string
    markdownDescription: string
    languageName: string
  }
  type TCurrentLawsuit = {
    id: number
    createdAt: string
    type: string
    deletedDate: string | null
    status: string
  }

  type TContentMentions = {
    avatarUrl: string
    firstName: string | null
    id: number
    lastName: string | null
    username: string
    commentTranslation?: TCommentTranslation
    description: string
    created: { date: string }
    authorId: number
  }

  interface IComment {
    id: number
    description: string
    created: string
    searchCommentPath: string
    updated: string
    author: IAuthor
    paidQuestionWinner: null | {
      createdAt: string | null
      deletedDate: string | null
      id: number
      pickedAt: string | null
      resolvedAt: string | null
    }
    uuid: string
    likesCount: number
    parentId: null | number
    childrenCount: number
    isLiked: boolean
    articleType: TEntity
    language: TAllowedLocales
    deletedDate: string | null
    flags?: CommentFlag[]
    isPaywall: boolean
    isPM4A: boolean
    paywall: string | undefined
    product?: IProduct
    paywallLength: number
    languageName: string
    userMentions: TUserMentions[]
    contentMentions: TContentMentions[]
    commentTranslation: TCommentTranslation
    currentLawsuits: Flags["comment"][]
    anonymous: boolean
    //TODO: there is not such a thing on the backend right now. I do not want to remove it just yet.
    isAwarded?: boolean
    deletedBy?: string
    children?: IComment[]
  }

  interface IPaidQuestion {
    id: number
    commission: number
    resolveContestDate: string | null
    winnerDeadlineResolvedAt: string | null
    prize: number
    contestDurationInHours: number
    contestDurationDate: string | Date
    publishedDate: null
    pickWinnerDeadline: string | null
    winCriteria:
      | "equalShareIfNotExcluded"
      | "chooseWinner"
      | "proportionNumOfLikes"
    decimalPrize: number
  }

  interface IPaidQuestionWinners {
    id: number
    commission: number
    resolveContestDate: string | null
    winnerDeadlineResolvedAt: string | null
    prize: number
    contestDurationInHours: number
    contestDurationDate: string
    publishedDate: null
    pickWinnerDeadline: string | null
    winCriteria:
      | "equalShareIfNotExcluded"
      | "chooseWinner"
      | "proportionNumOfLikes"
    decimalPrize: number
    winners: [
      {
        id: number
        pickedAt: string
        createdAt: string
        resolvedAt: string | null
        deletedDate: string | null
        user: {
          username: string
          id: number
        }
        comment: {
          description: string
          id: number
        }
      }
    ]
  }

  type keyTag = "tag" | "excludedTag"

  interface ArticleFlag {
    articleId: number
    creationDate: string
    isValid: boolean
    type: FlagContent

    [index: string]: number
  }

  interface CommentFlag {
    commentId: number
    creationDate: string
    isValid: boolean
    type: FlagContent

    [index: string]: number
  }

  interface ClarifyMessage {
    id: number
    author: IAuthor
    createdAt: string
    clarifiedAt: null | string
    clarify: null | string
    message: string
    article?: IQuestionItem
  }

  type TArticleTranslation = {
    title: string
    author: AuthorTranslatedBy | null
    description: string
    slug?: string
    languageName: string
  }

  interface IQuestionItem {
    id: number
    author: IAuthor
    adultContent: boolean
    title: string
    description: string
    created: string
    updated: string
    voteScore: number
    currentLawsuits: Flags["articles"][]
    tags: ITag[]
    uuid: string
    languageName: string
    language: TAllowedLocales | string
    likesCount: number
    commentsCount: number
    parentCommentsCount: number
    photoUrl: null | string
    type: TEntity
    hideReason: string | null
    isLiked: boolean
    isPaidQuestion: boolean
    highlighted: boolean
    paidQuestion: IPaidQuestion | null
    flags: ArticleFlag[]
    clarifies?: ClarifyMessage[]
    slug?: string
    userMentions: TUserMentions[]
    articleTranslation: TArticleTranslation | null
    anonymous: boolean
    deletedBy?: string
  }

  interface FeaturedItem {
    title: string
    description: string
    imageUrl?: string
    linkUrl: string
    article?: IQuestionItem
    language: TAllowedLocales
  }

  interface QuestionShortSearchItem {
    id: number
    title: string
    content: string
    type: TArticleType
  }

  type AuthorShortSearchItem = Pick<
    IAuthor,
    "username" | "firstName" | "lastName" | "bio" | "id"
  >

  type AuthorTranslatedBy = {
    firstName: IAuthor["firstName"] | null
    lastName: IAuthor["lastName"] | null
    username: IAuthor["username"]
    avatarUrl: IAuthor["avatarUrl"]
  }

  export type NextPageWithLayout<
    P = Record<string, unknown>,
    IP = P
  > = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
  }

  type AppCCFoundProps = AppProps<{
    dehydratedState?: DehydratedState
  }> & {
    Component: NextPageWithLayout
    emotionCache?: EmotionCache
  }

  type ExternalLoginProvider = "facebook" | "google" | "apple"

  type ReturnPromiseTypes<T extends Promise> = Awaited<ReturnType<T>>

  type TJudge = {
    id: number
    username: string
    firstName: string | null
    lastName: string | null
    academicDegree: string | null
    points: number
    yourFlags: string[]
    avatarUrl: string
    level: number
    rank: number
    role: TUserRole[]
  }
  type TParentLawsuit = {
    id: number
    justification: string
    judge: TJudge
  }
  type TLawsuitEntity = {
    id: number
    title: string
    description: string
    photoUrl: string
    isLiked: boolean
    isVoted: boolean
    yourFlags: string[]
    username: string
  }
  type TDeletedEntities = {
    createdAt: string
    entityId: string
    entityType: TEntity
    id: number
    isRevert: boolean
  }
  type TLawsuitData = {
    id: number
    judge: TJudge
    isUnread: boolean
    isChild: boolean
    createdAt: string
    resolvedAt: string
    openedAt: string
    startedAt: string
    justification: string
    roleBlocks: string[]
    deletedEntities: TDeletedEntities[]
    type: FlagContent
    status: LawsuitStatus
    parent: TParentLawsuit | null
    child: TParentLawsuit | null
    instanceLevel: number
    entity: TLawsuitEntity
    entityType: TEntity
  }

  type TReferrals = {
    description: string | null
    registrationsCount: number
    url: string
    visitsCount: number
  }

  type TReferralsStats = {
    clicks: number
    registeredUsers: number
    verifiedUsers: number
    vouchers: number
    reputation: number
  }

  type TReferralsSettings = {
    active: boolean
  }

  type TJudged = {
    id: number
    username: string
    role: [
      {
        blockedDate: null | string
        role: string
        translation: string
      }
    ]
  }
  type TRoleBlocks = {
    blockedBy: null | string
    blockedDate: null | string
    creationDate: null | string
    id: number
    role: TRole
    unblockedDate: null | string
  }

  type PlainLoginResponse = {
    id: number
    username?: string
    firstName?: string
    lastName?: string
    prefix?: string
    email: string
    avatar: string
    roles: Record<string, string>
    refresh_token_expiration: number
  }
  type Check2FaResponse = {
    login: string
    message: string
    "2fa_type": TwoFactorType
  }
  type LoginResponse = PlainLoginResponse | Check2FaResponse

  type TAdminLawsuitsResponse = {
    child?: null | string[]
    createdAt: string
    deletedEntities: TDeletedEntities[]
    entity: { id: number; username: string; description: string }
    entityType: TEntity
    id: number
    instanceLevel?: number
    isUnread?: boolean
    judge: TJudge
    judged: TJudged
    justification: string | null
    objection?: string | null
    openedAt: string | null
    parent?: TParentLawsuit | null
    resolvedAt: string | null
    roleBlocks?: TRoleBlocks[]
    startedAt: null | string
    type: FlagContent
    status: LawsuitStatus
    updatedAt: string
    pm4aCommentId?: number
    pm4aQuestionId?: number
  }

  type TStatusColor = "#ff9800" | "#0cc19b" | "#175cff"

  type TAdminOrdersResponseMeta = {
    pagination: TPagination
    count: number
    sum: number
    commission: number
  }

  type TAdminOrdersResponse = {
    meta: TAdminOrdersResponseMeta
    data: TOrder[]
  }

  type TAdminTransactionsResponseMeta = {
    pagination: TPagination
    sumTransactions: number
    sumBurnout: number
    sumCommission: number
    countBurnout: number
    countCommission: number
  }

  type TAdminTransactionsResponse = {
    meta: TAdminTransactionsResponseMeta
    data: TTransaction[]
  }

  type TDeposits = {
    gateway: string
    id: string
    status: string
    value: number
    valueInCurrency: number
  }

  type TDepositsResponse = {
    deposit: TDeposits
    redirect_url: string
  }

  type TSearchUser = {
    academicDegree: string | null
    avatarUrl: string | null
    badges: IBadge[]
    firstName: string
    lastName: string
    phrase: string | null
    points: number | null
    username: string
    uuid: string
    id: number
    yourFlags: string[]
    name: string
    userId: number
  }
  type TWithdrawDepositResponseUser = {
    id: number
    username: string
    website: string | null
    bio: string | null
    uuid: string
    flags: {
      creationDate: string
      isValid: boolean
      userId: number
      type: string
    }[]
    subscriptionsCount: number | null
    subscribedCount: number | null
    articlesCount: number | null
    questionsCount: number | null
    commentsCount: number | null
    isActive: boolean
    email: string
    created: string
    type: string
    firstName: string
    lastName: string
    phrase: string | null
    academicDegree: string | null
    points: number
    badges: IBadge[]
    language: string
    currentLawsuits: TCurrentLawsuit[]
    role: {
      role: string
      translation: string
      blockedDate: string | null
    }[]
    level: number
    rank: number
    yourFlags: string[]
    avatarUrl: string
  }

  type TAdminUsersResponse = {
    meta: {
      pagination: TPagination
      count: number | null
      inactiveCount: number | null
      countVerified: number | null
    }
    data: TAdminUser[]
  }

  type TAdminReferralResponse = {
    meta: {
      pagination: TPagination
      countUsers: number | null
      countUsersVerified: number | null
      sumVouchers: number | null
    }
    data: TAdminReferral[]
  }

  type TAdminReferral = {
    id: string
    user: TReferralsUser
    usedByUsers: TReferralsUser[]
    description: string | null
    voucherEarned: number
    createdAt: string
    isActive: boolean
    countUsers: number
    countHistoryVisits: number
    countVerifiedUsers: number
    ref: string | null
  }

  type TAdminNewslettersResponse = {
    meta: TListResponseMeta
    data: TAdminNewsletter[]
  }

  type TWithdrawResponse = {
    address: string
    amount: number
    id: string
    network: string
    stablecoin: string
    created: string
    status: string
    user: TWithdrawDepositResponseUser
  }

  type TListResponseMeta = {
    pagination: TPagination
  }

  type TWithdrawListResponse = {
    meta: TListResponseMeta
    data: TWithdrawResponse[]
  }

  type TAdminTagsManagementResponseData = {
    uuid: string
    label: string
    articlesCount: number
    proposed: boolean
  }

  type TAdminTagsManagementResponse = {
    meta: {
      pagination: TPagingation
    }
    data: TAdminTagsManagementResponseData[]
  }

  type TWalletTransactionsResponse = {
    meta: {
      pagination: TPagingation
    }
    data: TTransaction[]
  }

  type TTransaction = {
    gatewayCommission?: { value: string }
    id: string
    date: string
    amount: number
    message: string | null
    description: string
    status: string
    type: TTransactionType
    deposit?: TDepositResponse
    withdrawal?: TWithdrawResponse
    order?: TOrder
    receiver?: TTransactionUser
    paying?: TTransactionUser
    tip?: TTip
  }

  type TTransactionUser = {
    userId: number
    address: string
    id: number
    userEmail: string
    userUsername: string
  }

  type TTip = {
    commission: number
    description: string
    id: number
    tip: number
    donated: {
      id: number
      username: string
    }
    user: {
      id: number
      username: string
    }
    entity: {
      id: number
      type: string
    }
  }

  type TOrder = {
    productTypeSuffix: string
    id: number
    createdAt: string
    completedAt: string | null
    items: TOrderItem[]
    transaction?: TTransaction
    paymentDeadline: string
    cancelledAt: string | null
    status: string
    invoices?: string[]
    user: {
      id: number
      username: string
      lastName?: string
      firstName?: string
      email?: string
    }
    totalPrice: number
  }

  type TOrderItem = {
    id: number
    quantity: number
    totalPrice: number
    totalPriceDecimal: number
    description: string
    productTypeSuffix?: string
    productType?: string
    product: TProduct
  }

  type TProduct = {
    price: number
    decimalPrice: number
    language: string
    author: {
      id: number
      username: string
      avatarUrl?: string
      firstName?: string
      lastName?: string
      rank?: number
      username?: string
    }
    relatedId?: number
    relatedObjectType?: string
    status: string
    level: string
    type?: TProductType
    id: number
    title: string | null
    coverUrl?: string
  }

  type TDepositResponse = {
    value: number
    id: string
    gateway: string
    status: string
    valueInCurrency: number
    createdAt: string
    currency: {
      name: string
      exchangeRate: number
    }
    user: TWithdrawDepositResponseUser
  }

  type TDepositResponseMeta = {
    pagination: TPagination
  }

  type TDepositListResponse = {
    meta: TDepositResponseMeta
    data: TDepositResponse[]
  }

  type TReferralsUser = {
    id: number
    username: string | null
    email: string | null
    created: string | null
    language: string | null
    avatarUrl: string
    verificationLevel: number | null
  }

  type TStaticPage = {
    title: string
    content: string | null
    slug: string
    active: boolean | null
    language: string
  }

  type TUiTranslationFilters = {
    namespace: string
    source: string
    value: string
    language: string
    onlyUntranslated: boolean
  }

  type TNotification = {
    id: number
    content?: string
    push?: string
    title?: string
    type: string
    locale?: TAllowedLocales
  }

  type TNotificationAdminResponse = {
    meta: {
      pagination: TPagination
    }
    data: TNotification[]
  }

  type TEmailTranslation = {
    id: number
    content?: string
    contentHtml?: string
    subject?: string
    type: string
    locale?: TAllowedLocales
  }

  type TEmailTranslationResponse = {
    meta: {
      pagination: TPagination
    }
    data: TEmailTranslation[]
  }

  type TAdminStatistics = {
    name: string
    articleCount: number
    questionCount: number
    commentCount: number
    registrationCount: number
    activationCount: number
  }

  type AutocompleteOption = {
    id: string
    title: string
    href: LinkProps["href"]
    groupType: string
    content?: string
  }

  type TUserAddress = {
    id: number
    name: string
    street: string
    postalCode: number
    city: string
    vatId: number | null
    company: boolean
    defaultAddress: boolean
    user: TSession
    created: string
    deleted: boolean
    country: {
      code: string,
      code3l: string,
      flag: string,
      name: string
    }
  }

  type TCheckoutProductItem = {
    createdAt: string
    id: number
    product: TProduct
    quantity: number
    totalPrice: number
    totalPriceDecimal: number
  }

  type TCheckoutCart = {
    id: number
    createdAt: string
    deletedDate: string | null
    items: TCheckoutProductItem[]
    status: string
    totalPrice: number
    totalPriceDecimal: number
    updatedAt: string
  }

  type TMercureNotificationEvent =
    | "article_clarify.answer"
    | "article_clarify.request"
    | "article.comment"
    | "article.flagged"
    | "article.lawsuit"
    | "article.lawsuit_resolved"
    | "article.lawsuit_update"
    | "article.participate_comment"
    | "comment.comment"
    | "deposit.canceled"
    | "deposit.completed"
    | "deposit.new"
    | "lawsuit.new"
    | "notification.mention"
    | "paid_question.deadline"
    | "paid_question.deadline_exclude"
    | "paid_question.end_by_likes"
    | "paid_question.published"
    | "paid_question.refund"
    | "paid_question.refund_lawsuit"
    | "paid_question.reward"
    | "paid_question.reward_choose"
    | "paid_question.reward_excluded"
    | "pm4a_clarify.request"
    | "pm4a_clarify.response"
    | "pm4a.add"
    | "pm4a.buy"
    | "pm4a.complete"
    | "pm4a.new"
    | "pm4a.sold"
    | "pm4a.sold_question_author"
    | "product.deadline_passed"
    | "product.new_version"
    | "product.published"
    | "product.rejected"
    | "referral.user.verified"
    | "role.added"
    | "tag.new_subscribed_content"
    | "tipped.user"
    | "tokend.received"
    | "user.2fa_disabled"
    | "user.2fa_enabled"
    | "user.email_changed"
    | "user.flagged"
    | "user.lawsuit"
    | "user.new_like"
    | "user.new_multiple_like"
    | "user.new_subscribed_content"
    | "user.reset_password_confirmed"
    | "user.update.balance"
    | "withdrawal.canceled"
    | "withdrawal.completed"
    | "withdrawal.new"

  type TMercureNotificationType =
    | "comment"
    | "article"
    | "parent_comment"
    | "user"
    | "lawsuit"
    | "product"
    | "tip"
  type TMercureRelatedObjectNotification = {
    type: TMercureNotificationType
    id: number
  }
  type TMercureNotification = {
    relatedObjects: TMercureRelatedObjectNotification[]
    type: TMercureNotificationEvent
  }
}

export {}

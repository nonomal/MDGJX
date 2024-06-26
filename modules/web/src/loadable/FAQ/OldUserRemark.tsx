export default () => {
    return <>
        对于CodeGen老用户：<br />
        由于旧系统和新系统的计费算法迁移过于复杂，经团队内部讨论，老用户将会按情况获取单份或多份永久会员<br />
        具体规则如下：<br />
        <p className="pl-3">
            1. 在2024年6月28日前，凡是在CodeGen工具箱官网购买过月度会员或者非付费方式获赠过永久会员，我们会认为他/她是老用户<br />
            2. 我们会对每个用户的总付费金额进行统计，以每6元为单位，赠送一份或者多份永久会员礼品卡<br />
            3. 永久会员礼品卡可自用、赠送他人，并且永不过期，不会撤销，相当于是买断制。<br />
        </p>
        <div className="my-3"></div>

        例子：<br />
        <p className="pl-3">
            用户A有曾购买3元的订单，则自动获得1份永久会员礼品卡<br />
            用户B有曾购买11元的订单，则自动获取2份永久会员礼品卡<br />
            用户C有曾购买15元的订单，则自动获取3份永久会员礼品卡<br />
        </p>
        <div className="my-3"></div>
        我们知道距离上一次CodeGen工具箱已经有一段时间了，我们深感愧疚，并会全力推进秒达工具箱的开发，新工具箱不会辜负各位的期待， 也不会损害老用户的权益，敬请期待。
        到时候关于用户付费功能，我们考虑会从以下几点出发：<br />
        <p className="pl-3">
            1. 每人有8g的云盘空间，可同步上传下载<br />
            2. 每人可以无限制使用AI对话功能和扩展功能<br />
            3. OCR识图、翻译等功能都将完全开放<br />
            4. 其他一些会员付费功能<br />
        </p>
    </>
}